import type { Company } from '../types/company';

export const createCompany = (partial?: Partial<Company>): Company => ({
  id: -1,
  name: 'New Company',
  shortName: 'Company',
  owner: -1,
  booker: -1,
  ...partial,
});
