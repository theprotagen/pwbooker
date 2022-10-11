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
