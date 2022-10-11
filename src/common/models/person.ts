import { Gender, Nationality, Race, Sexuality } from '../enums';
import type { Person } from '../types';

export const createPerson = (partial?: Partial<Person>): Person => ({
  id: -1,
  user: false,
  firstName: 'New',
  lastName: 'Person',
  birthday: new Date(),
  debut: new Date(),
  gender: Gender.Male,
  sexuality: Sexuality.Heterosexual,
  race: Race.White,
  nationality: Nationality.American,
  ...partial,
});
