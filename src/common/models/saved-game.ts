import { nanoid } from 'nanoid';

import type { SavedGame } from '../types';

export const createSavedGame = (partial?: Partial<SavedGame>): SavedGame => ({
  id: nanoid(),
  name: 'New Game',
  dateCreated: new Date(),
  dateModified: new Date(),
  ...partial,
});
