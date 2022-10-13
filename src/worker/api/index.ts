import * as company from './company';
import * as config from './config';
import * as game from './game';
import * as gameInfo from './game-info';
import * as meta from './meta';
import * as user from './user';

export const workerApi = {
  ...company,
  ...config,
  ...game,
  ...gameInfo,
  ...meta,
  ...user,
};
