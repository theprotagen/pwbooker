import { useQuery } from '@tanstack/react-query';

import { QK_GAME, QK_META } from '@/common';
import { api } from '@/ui/api';

export const useGetMeta = () => useQuery([QK_GAME, QK_META], async () => await api.getMeta());
