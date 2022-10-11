import { Group, Loader } from '@mantine/core';
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
    // eslint-disable-next-line
  }, []);

  return (
    <Suspense
      fallback={
        <Group
          style={{
            alignItems: 'center',
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(0, 0, 0, 0.0)',
            height: '100vh',
            justifyContent: 'center',
            left: 0,
            position: 'absolute',
            top: 0,
            width: '100vw',
            zIndex: 1000,
          }}
        >
          <Loader />
        </Group>
      }
    >
      {loading && <LoadingOverlay />}
      {setupComplete && <AppRoutes />}
    </Suspense>
  );
};
