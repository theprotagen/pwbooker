import { createCompany } from '@/common';
import { cache } from '@/worker/cache';

import { getCurrentUser } from './get-current-user';

export const getUserCompany = () => {
  const user = getCurrentUser();
  console.log('here');
  if (user.id !== -1) {
    const userCompany = cache.companies.getAll().find(company => company.booker === user.id);
    if (userCompany) {
      return userCompany;
    }
  }

  return createCompany();
};
