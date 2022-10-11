import { AppShell, Footer, Header, useMantineTheme } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import { AppFooter, AppHeader } from '../marginals';

export const AppLayout = () => {
  const theme = useMantineTheme();

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      footer={
        <Footer height={60} p="md">
          <AppFooter />
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <AppHeader />
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
};
