import { Loader, Stack, Text } from '@mantine/core';

import { useLoadingStore } from '@/ui/stores';

export const LoadingOverlay = () => {
  const { loading, message } = useLoadingStore();

  return loading ? (
    <Stack
      style={{
        alignItems: 'center',
        backdropFilter: 'blur(5px)',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        height: '100vh',
        justifyContent: 'center',
        left: 0,
        margin: 0,
        padding: 0,
        position: 'absolute',
        top: 0,
        width: '100vw',
        zIndex: 1000,
      }}
    >
      {message && <Text>{message}</Text>}
      <Loader />
    </Stack>
  ) : (
    <></>
  );
};
