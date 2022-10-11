import { createSavedGame } from '@/common';
import { cache } from '@/worker/cache';
import { importFromJson } from '@/worker/utils';

import { loadGame } from './load-game';

export const newGame = async (name: string, data: string) => {
  const savedGame = createSavedGame({ name });
  cache.meta.savedGames.push(savedGame);

  await loadGame(savedGame.id);
  await importFromJson(cache.gameDb, data);

  await cache.flush();
};
