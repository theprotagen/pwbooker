import type { Company, Person } from '@/common';

import { cache } from './cache';

export type Store = Company | Person;
export type StoreName = 'companies' | 'people';

export const storeNames: StoreName[] = ['companies', 'people'];

export type StoreApi<T extends Store> = {
  storeName: StoreName;
  data: Record<number, T>;
  dirty: boolean;
  maxId: number;
  dirtyRecords: Set<number>;
  deletedRecords: Set<number>;
  fill(): Promise<void>;
  flush(): Promise<void>;
  get(id: number): T;
  getAll(): T[];
  put(record: T): number;
  delete(id: number): void;
  clear(): void;
};

export const createStoreApi = <T extends Store>(storeName: StoreName): StoreApi<T> => ({
  storeName,
  data: {},
  dirty: false,
  maxId: 0,
  dirtyRecords: new Set(),
  deletedRecords: new Set(),

  async fill() {
    this.data = {};
    this.maxId = 0;
    this.dirtyRecords = new Set();
    this.deletedRecords = new Set();

    await Promise.all([
      (async () => {
        const cursor = await cache.gameDb.transaction(storeName).store.openCursor(undefined, 'prev');
        if (cursor) {
          this.maxId = cursor.value.id;
        }
      })(),
      (async () => {
        const records = await cache.gameDb.getAll(storeName);
        for (const record of records) {
          this.data[record.id] = record as unknown as T;
        }
      })(),
    ]);
  },

  async flush() {
    if (this.dirty) {
      const tx = cache.gameDb.transaction(storeName, 'readwrite');

      for (const id of this.deletedRecords) {
        tx.store.delete(id);
      }

      for (const id of this.dirtyRecords) {
        const record = this.data[id];
        if (record !== undefined) {
          tx.store.put(this.data[id]);
        }
      }

      await tx.done;

      this.dirty = false;
      this.dirtyRecords.clear();
      this.deletedRecords.clear();
    }
  },

  get(id: number) {
    return this.data[id];
  },

  getAll() {
    return Object.values(this.data);
  },

  put(record: T) {
    if (record.id === -1) {
      this.maxId++;
      record.id = this.maxId;
    }

    this.data[record.id] = record;

    this.dirty = true;
    this.dirtyRecords.add(record.id);

    return record.id;
  },

  delete(id: number) {
    delete this.data[id];
    this.dirty = true;
    this.deletedRecords.add(id);
  },

  clear() {
    for (const id of Object.keys(this.data)) {
      this.delete(parseInt(id));
    }
  },
});
