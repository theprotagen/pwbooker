import { useQuery } from '@tanstack/react-query';

import { QK_GAME, QK_USER } from '@/common';
import { api } from '@/ui/api';

export const useGetCurrentUser = () => useQuery([QK_GAME, QK_USER], async () => await api.getCurrentUser());
