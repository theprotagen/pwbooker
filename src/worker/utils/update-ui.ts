import { cache } from '../cache';

export const updateUi = (keys: string[]) => {
  cache.port.postMessage(keys);
};
