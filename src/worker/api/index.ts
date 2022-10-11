import * as config from './config';
import * as game from './game';

export const workerApi = {
  ...config,
  ...game,
};
