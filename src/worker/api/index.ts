import * as config from './config';
import * as game from './game';
import * as meta from './meta';
import * as user from './user';

export const workerApi = {
  ...config,
  ...game,
  ...meta,
  ...user,
};
