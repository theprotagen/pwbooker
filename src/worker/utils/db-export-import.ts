import type { IDBPDatabase } from 'idb';

import type { GameDb } from '@/worker/db';

import { storeNames } from '../cache/store-api';

export const exportToJson = async (db: IDBPDatabase<GameDb>) => {
  const exportObject = {};
  const tx = db.transaction(storeNames, 'readonly');

  for (const storeName of storeNames) {
    const allObjects = [];
    let cursor = await tx.objectStore(storeName).openCursor();
    while (cursor) {
      allObjects.push(cursor.value);
      cursor = await cursor.continue();
    }
    // @ts-ignore
    exportObject[storeName] = allObjects;
  }

  return JSON.stringify(exportObject);
};

export const importFromJson = async (db: IDBPDatabase<GameDb>, json: string) => {
  const importObject = JSON.parse(json);
  const tx = db.transaction(storeNames, 'readwrite');

  for (const storeName of storeNames) {
    if (Object.hasOwn(importObject, storeName)) {
      for (const record of importObject[storeName]) {
        tx.objectStore(storeName).put(record);
      }
    }
  }

  await tx.done;
};
