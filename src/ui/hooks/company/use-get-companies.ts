import { useQuery } from '@tanstack/react-query';

import { QK_COMPANY, QK_GAME } from '@/common';
import { api } from '@/ui/api';

export const useGetCompanies = () => useQuery([QK_GAME, QK_COMPANY], async () => await api.getCompanies());
