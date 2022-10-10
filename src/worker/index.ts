import { expose } from 'comlink';

import { workerApi } from './api';
import { cache } from './cache';

interface SharedWorkerGlobalScope {
  onconnect: (event: MessageEvent) => void;
}

const _self: SharedWorkerGlobalScope = self as any;

_self.onconnect = (e: MessageEvent) => {
  const port = e.ports[0];
  cache.port = port;

  expose(workerApi, port);
};

export type WorkerApi = typeof workerApi;
