export enum Gender {
  Male,
  Female,
  NonBinary,
}

export const genders = new Map<Gender, { label: string; frequency: number }>([
  [Gender.Male, { label: 'Male', frequency: 100 }],
  [Gender.Female, { label: 'Female', frequency: 10 }],
  [Gender.NonBinary, { label: 'Non-Binary', frequency: 1 }],
]);

export enum Sexuality {
  Heterosexual,
  Homosexual,
  Bisexual,
}

export const sexualities = new Map<Sexuality, { label: string; frequency: number }>([
  [Sexuality.Heterosexual, { label: 'Heterosexual', frequency: 100 }],
  [Sexuality.Homosexual, { label: 'Homosexual', frequency: 5 }],
  [Sexuality.Bisexual, { label: 'Bisexual', frequency: 1 }],
]);

export enum Race {
  White,
  Black,
  Asian,
  Hispanic,
  AmericanIndian,
  MiddleEastern,
  Indian,
  PacificIslander,
  Other,
}

export const races = new Map<Race, { label: string }>([
  [Race.White, { label: 'White' }],
  [Race.Black, { label: 'Black' }],
  [Race.Asian, { label: 'Asian' }],
  [Race.Hispanic, { label: 'Hispanic' }],
  [Race.AmericanIndian, { label: 'American Indian' }],
  [Race.MiddleEastern, { label: 'Middle Eastern' }],
  [Race.Indian, { label: 'Indian' }],
  [Race.PacificIslander, { label: 'Pacific Islander' }],
  [Race.Other, { label: 'Other' }],
]);

export enum Nationality {
  American,
}

export const nationalities = new Map<
  Nationality,
  { label: string; frequency: number; raceFrequencies: Map<Race, number> }
>([
  [
    Nationality.American,
    {
      label: 'American',
      frequency: 100,
      raceFrequencies: new Map([
        [Race.White, 100],
        [Race.Black, 10],
      ]),
    },
  ],
]);

export enum BodyType {
  Average,
  Skinny,
  Toned,
  Muscular,
  Ripped,
  Flabby,
  Bulky,
  Obese,
}

export const bodyTypes = new Map<BodyType, { label: string; frequency: number }>([
  [BodyType.Average, { label: 'Average', frequency: 100 }],
  [BodyType.Skinny, { label: 'Skinny', frequency: 10 }],
  [BodyType.Toned, { label: 'Toned', frequency: 100 }],
  [BodyType.Muscular, { label: 'Muscular', frequency: 100 }],
  [BodyType.Ripped, { label: 'Ripped', frequency: 100 }],
  [BodyType.Flabby, { label: 'Flabby', frequency: 100 }],
  [BodyType.Bulky, { label: 'Bulky', frequency: 100 }],
  [BodyType.Obese, { label: 'Obese', frequency: 100 }],
]);

export enum BodySize {
  Featherweight,
  Lighweight,
  Middleweight,
  Heavyweight,
  Giant,
}

export const bodySizes = new Map<BodySize, { label: string; frequency: number }>([
  [BodySize.Featherweight, { label: 'Featherweight', frequency: 100 }],
  [BodySize.Lighweight, { label: 'Lighweight', frequency: 100 }],
  [BodySize.Middleweight, { label: 'Middleweight', frequency: 100 }],
  [BodySize.Heavyweight, { label: 'Heavyweight', frequency: 100 }],
  [BodySize.Giant, { label: 'Giant', frequency: 100 }],
]);
