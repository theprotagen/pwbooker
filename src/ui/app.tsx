import { Suspense, useEffect, useState } from 'react';

import { api } from './api';
import { LoadingOverlay } from './components';
import { AppRoutes } from './routes';
import { useLoadingStore } from './stores';

export const App = () => {
  const { loading, setLoading } = useLoadingStore();

  const [setupComplete, setSetupComplete] = useState(false);

  useEffect(() => {
    setLoading(true, 'Setting up...');
    api.setup().then(() => {
      setSetupComplete(true);
      setLoading(false);
    });
  }, []);

  return (
    <Suspense fallback={<></>}>
      {loading && <LoadingOverlay />}
      {setupComplete && <AppRoutes />}
    </Suspense>
  );
};
