import { Suspense, useEffect, useState } from 'react';

import { api } from './api';
import { AppRoutes } from './routes';

export const App = () => {
  const [setupComplete, setSetupComplete] = useState(false);

  useEffect(() => {
    api.setup().then(() => {
      setSetupComplete(true);
    });
  }, []);

  return <Suspense fallback={<></>}>{setupComplete && <AppRoutes />}</Suspense>;
};
