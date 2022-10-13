import { cache } from '@/worker/cache';

export const getCompanies = () => cache.companies.getAll();
