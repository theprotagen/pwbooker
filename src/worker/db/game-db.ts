import { type DBSchema, openDB } from 'idb';

import { type GameInfo, type Person, GAME_DB_VERSION } from '@/common';

export type GameDb = DBSchema & {
  gameInfo: {
    key: number;
    value: GameInfo;
    autoIncrementKeyPath: 'id';
  };
  people: {
    key: number;
    value: Person;
    autoIncrementKeyPath: 'id';
  };
};

export const connectGame = async (id: string) =>
  await openDB<GameDb>(id, GAME_DB_VERSION, {
    upgrade(db, oldVersion) {
      if (oldVersion === 0) {
        db.createObjectStore('gameInfo', {
          keyPath: 'id',
          autoIncrement: true,
        });

        db.createObjectStore('people', {
          keyPath: 'id',
          autoIncrement: true,
        });
      }
    },
  });
