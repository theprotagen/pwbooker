import { EMPTY_SAVED_GAME_ID } from '../constants';
import type { Meta } from '../types';

export const createMeta = (partial?: Partial<Meta>): Meta => ({
  id: 1,
  currentGameId: EMPTY_SAVED_GAME_ID,
  savedGames: [],
  ...partial,
});
