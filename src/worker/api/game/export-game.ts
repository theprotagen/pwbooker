import type { SavedGame } from '@/common';
import { connectGame } from '@/worker/db';
import { exportToJson } from '@/worker/utils';

export const exportGame = async (savedGame: SavedGame) => {
  const db = await connectGame(savedGame.id);
  const json = exportToJson(db);
  return json;
};
