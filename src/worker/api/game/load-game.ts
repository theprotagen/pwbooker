import { QK_GAME } from '@/common';
import { cache } from '@/worker/cache';
import { connectGame } from '@/worker/db';
import { updateUi } from '@/worker/utils';

export const loadGame = async (id: string) => {
  cache.gameDb = await connectGame(id);
  cache.meta.currentGameId = id;

  await cache.fill();

  updateUi([QK_GAME]);
};
