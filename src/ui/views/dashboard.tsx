import { Text } from '@mantine/core';
import { Link } from 'react-router-dom';

import { View } from '../components';
import { useGetCurrentUser } from '../hooks/user';

export const Dashboard = () => {
  const { data: currentUser } = useGetCurrentUser();

  return (
    <View title="Dashboard">
      {currentUser?.id === -1 && (
        <Text>
          This game has no active users. To create a new user, <Link to="/game/create-user">click here</Link>.
        </Text>
      )}
    </View>
  );
};
