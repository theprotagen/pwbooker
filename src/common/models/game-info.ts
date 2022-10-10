import type { GameInfo } from '../types';

export const createGameInfo = (partial?: Partial<GameInfo>): GameInfo => ({
  id: 1,
  currentUserId: -1,
  date: new Date(),
  ...partial,
});
