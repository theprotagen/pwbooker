import { AppShell, Aside, Burger, Footer, Header, MediaQuery, Navbar, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { GameAside, GameFooter, GameHeader } from '../marginals';

export const GameLayout = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200 }}>
          <GameHeader />
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200 }}>
            <GameAside />
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          <GameFooter />
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened(o => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <GameHeader />
          </div>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
};
