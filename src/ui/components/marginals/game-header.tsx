import { Button, Group, Menu, Portal, Text } from '@mantine/core';
import { IconSettings, IconSwitchHorizontal, IconUser } from '@tabler/icons';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

import { APP_NAME } from '@/common';
import { useGetCurrentUser, useGetGameInfo } from '@/ui/hooks';

export const GameHeader = () => {
  const navigate = useNavigate();

  const { data: currentUser } = useGetCurrentUser();
  const { data: gameInfo } = useGetGameInfo();

  const onAppNameClicked = () => {
    navigate('/');
  };

  const onSwitchUserClicked = () => {
    navigate('/game/switch-user');
  };

  const onSettingsClicked = () => {
    navigate('/game/settings');
  };

  return (
    <Group
      style={{
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Button variant="subtle" onClick={() => onAppNameClicked()}>
        {APP_NAME}
      </Button>
      <Text>{dayjs(gameInfo?.date).format('dddd, MMMM D, YYYY')}</Text>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button leftIcon={<IconUser size={18} />} variant="subtle">
            {currentUser?.firstName} {currentUser?.lastName}
          </Button>
        </Menu.Target>
        <Portal>
          <Menu.Dropdown>
            <Menu.Item icon={<IconSwitchHorizontal size={14} onClick={() => onSwitchUserClicked()} />}>
              Switch User
            </Menu.Item>
            <Menu.Item icon={<IconSettings size={14} />} onClick={() => onSettingsClicked()}>
              Settings
            </Menu.Item>
          </Menu.Dropdown>
        </Portal>
      </Menu>
    </Group>
  );
};
