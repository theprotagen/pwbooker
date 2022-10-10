import type { SavedGame } from './saved-game';

export type Meta = {
  id: number;
  currentGameId: string;
  savedGames: SavedGame[];
};
