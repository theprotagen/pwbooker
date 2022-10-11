import { type Person, QK_GAME, QK_USER } from '@/common';
import { cache } from '@/worker/cache';
import { updateUi } from '@/worker/utils';

export const newUser = (user: Person, setAsCurrent: boolean) => {
  const id = cache.people.put(user);

  if (setAsCurrent) {
    cache.gameInfo.currentUserId = id;
  }

  updateUi([QK_GAME, QK_USER]);
};
