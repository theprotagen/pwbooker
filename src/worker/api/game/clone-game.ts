import { type SavedGame, createSavedGame, QK_META } from '@/common';
import { cache } from '@/worker/cache';
import { connectGame } from '@/worker/db';
import { exportToJson, importFromJson, updateUi } from '@/worker/utils';

export const cloneGame = async (savedGame: SavedGame) => {
  const clonedSavedGame = createSavedGame({ name: `${savedGame.name} (Clone)` });
  cache.meta.savedGames.push(clonedSavedGame);

  const db = await connectGame(savedGame.id);
  const json = await exportToJson(db);

  const clonedDb = await connectGame(clonedSavedGame.id);

  await importFromJson(clonedDb, json);

  updateUi([QK_META]);
};
