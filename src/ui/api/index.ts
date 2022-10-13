import { wrap } from 'comlink';

import type { WorkerApi } from '@/worker';
import SharedWorker from '@/worker/index.ts?sharedworker';

import { queryClient } from '../lib';

const worker = new SharedWorker();

worker.port.onmessage = (e: MessageEvent) => {
  if (Array.isArray(e.data)) {
    console.log(e.data);
    queryClient.invalidateQueries(e.data);
  }
};

export const api = wrap<WorkerApi>(worker.port);
