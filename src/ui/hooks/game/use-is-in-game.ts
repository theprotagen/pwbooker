import { useQuery } from '@tanstack/react-query';

import { QK_GAME } from '@/common';
import { api } from '@/ui/api';

export const useIsInGame = () => useQuery([QK_GAME], async () => await api.isInGame());
