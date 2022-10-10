import { Alert, Stack, Text } from '@mantine/core';
import type { FC, PropsWithChildren } from 'react';
import { type FallbackProps, ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <Alert>
      <Stack>
        <Text weight="bold">{error.name}</Text>
        <Text>{error.message}</Text>
      </Stack>
    </Alert>
  );
};

export const ErrorBoundary: FC<PropsWithChildren> = ({ children }) => {
  return <ReactErrorBoundary FallbackComponent={ErrorFallback}>{children}</ReactErrorBoundary>;
};
