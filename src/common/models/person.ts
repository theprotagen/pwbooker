import { BodySize, BodyType, Gender, Nationality, Race, Sexuality } from '../enums';
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
  bodyType: BodyType.Average,
  bodySize: BodySize.Featherweight,
  creativity: 0,
  diplomacy: 0,
  leadership: 0,
  motivating: 0,
  negotiating: 0,
  persuading: 0,
  ...partial,
});
