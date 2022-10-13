import { useQuery } from '@tanstack/react-query';

import { QK_GAME, QK_USER, QK_USER_COMPANY } from '@/common';
import { api } from '@/ui/api';

export const useGetUserCompany = () =>
  useQuery([QK_GAME, QK_USER, QK_USER_COMPANY], async () => await api.getUserCompany());
