import type { IDBPDatabase } from 'idb';

import { type GameInfo, type Meta, type Person, createGameInfo, EMPTY_SAVED_GAME_ID } from '@/common';

import type { GameDb, MetaDb } from '../db';
import { type StoreApi, createStoreApi, storeNames } from './store-api';

const AUTO_FLUSH_INTERVAL = 500;

export type Cache = {
  port: MessagePort;
  metaDb: IDBPDatabase<MetaDb>;
  meta: Meta;
  prevMeta: Meta;
  gameDb: IDBPDatabase<GameDb>;
  gameInfo: GameInfo;
  prevGameInfo: GameInfo;
  people: StoreApi<Person>;
  fill(): Promise<void>;
  flush(): Promise<void>;
  autoFlush(): Promise<void>;
  autoFlushTimeoutId: NodeJS.Timeout;
};

export const cache: Cache = {
  // @ts-ignore
  port: undefined,

  // @ts-ignore
  metaDb: undefined,
  // @ts-ignore
  meta: undefined,
  // @ts-ignore
  prevMeta: undefined,

  // @ts-ignore
  gameDb: undefined,
  // @ts-ignore
  gameInfo: undefined,
  // @ts-ignore
  prevGameInfo: undefined,

  people: createStoreApi('people'),

  async fill() {
    // @ts-ignore
    this.prevGameInfo = undefined;
    this.gameInfo = (await this.gameDb.get('gameInfo', 1)) ?? createGameInfo();

    for (const store of storeNames) {
      await this[store].fill();
    }
  },

  async flush() {
    if (JSON.stringify(this.prevMeta) !== JSON.stringify(this.meta)) {
      this.prevMeta = JSON.parse(JSON.stringify(this.meta));
      await this.metaDb.put('meta', this.meta);
    }

    if (this.meta.currentGameId !== EMPTY_SAVED_GAME_ID) {
      if (JSON.stringify(this.prevGameInfo) !== JSON.stringify(this.gameInfo)) {
        this.prevGameInfo = JSON.parse(JSON.stringify(this.gameInfo));
        await this.gameDb.put('gameInfo', this.gameInfo);
      }

      for (const store of storeNames) {
        await this[store].flush();
      }
    }
  },

  async autoFlush() {
    await this.flush();

    clearTimeout(this.autoFlushTimeoutId);

    this.autoFlushTimeoutId = setTimeout(() => {
      this.autoFlush();
    }, AUTO_FLUSH_INTERVAL);
  },

  // @ts-ignore
  autoFlushTimeoutId: undefined,
};
