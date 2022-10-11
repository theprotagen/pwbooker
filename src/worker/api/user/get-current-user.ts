import { createPerson } from '@/common';
import { cache } from '@/worker/cache';

export const getCurrentUser = () => cache.people.get(cache.gameInfo.currentUserId) ?? createPerson();
