import { createMeta } from '@/common';
import { cache } from '@/worker/cache';
import { connectMeta } from '@/worker/db';

export const setup = async () => {
  cache.metaDb = await connectMeta();
  cache.meta = (await cache.metaDb.get('meta', 1)) ?? createMeta();
  await cache.autoFlush();
};
