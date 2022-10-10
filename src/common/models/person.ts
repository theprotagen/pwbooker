import type { Person } from '../types';

export const createPerson = (partial?: Partial<Person>): Person => ({
  id: -1,
  user: false,
  firstName: 'New',
  lastName: 'Person',
  ...partial,
});
