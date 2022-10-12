import { QK_GAME } from '@/common';
import { cache } from '@/worker/cache';
import { connectGame } from '@/worker/db';
import { updateUi } from '@/worker/utils';

export const loadGame = async (id: string) => {
  cache.gameDb = await connectGame(id);
  cache.meta.currentGameId = id;

  await cache.fill();

  const savedGame = cache.meta.savedGames.find(game => game.id === id);
  if (savedGame) {
    savedGame.dateModified = new Date();
    cache.meta.savedGames.filter(game => game.id !== id);
    cache.meta.savedGames.push(savedGame);
  }

  cache.inGame = true;

  updateUi([QK_GAME]);
};
