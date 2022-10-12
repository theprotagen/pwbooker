import { useQuery } from '@tanstack/react-query';

import { QK_GAME, QK_GAME_INFO } from '@/common';
import { api } from '@/ui/api';

export const useGetGameInfo = () => useQuery([QK_GAME, QK_GAME_INFO], async () => await api.getGameInfo());
