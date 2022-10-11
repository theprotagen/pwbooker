import { Gender, Nationality, Race, Sexuality } from '../enums';

export type Person = {
  id: number;
  user: boolean;
  firstName: string;
  lastName: string;
  birthday: Date;
  debut: Date;
  gender: Gender;
  sexuality: Sexuality;
  race: Race;
  nationality: Nationality;
};
