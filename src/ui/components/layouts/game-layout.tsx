import { AppShell, Aside, Burger, Footer, Header, MediaQuery, Navbar, Text, useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { EMPTY_SAVED_GAME_ID } from '@/common';
import { api } from '@/ui/api';
import { useGetMeta } from '@/ui/hooks';
import { useLoadingStore } from '@/ui/stores';

import { GameAside, GameFooter, GameHeader, GameNavbar } from '../marginals';

export const GameLayout = () => {
  const theme = useMantineTheme();

  const { setLoading } = useLoadingStore();
  const { data: meta } = useGetMeta();

  const [isInGame, setIsInGame] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (meta && meta.currentGameId !== EMPTY_SAVED_GAME_ID && !isInGame) {
      setLoading(true, 'Loading game...');

      api.loadGame(meta.currentGameId).then(() => {
        setLoading(false);
        setIsInGame(true);
      });
    }
    // eslint-disable-next-line
  }, [meta]);

  if (isInGame) {
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
            <GameNavbar />
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
  } else {
    return <Text>There is no active game!</Text>;
  }
};
