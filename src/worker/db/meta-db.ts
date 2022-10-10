import { type DBSchema, openDB } from 'idb';

import { type Meta, META_DB_NAME, META_DB_VERSION } from '@/common';

export type MetaDb = DBSchema & {
  meta: {
    key: number;
    value: Meta;
    autoIncrementKeyPath: 'id';
  };
};

export const connectMeta = async () =>
  await openDB<MetaDb>(META_DB_NAME, META_DB_VERSION, {
    upgrade(db, oldVersion) {
      if (oldVersion === 0) {
        db.createObjectStore('meta', {
          keyPath: 'id',
          autoIncrement: true,
        });
      }
    },
  });
