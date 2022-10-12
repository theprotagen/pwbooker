import { Button, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import { View } from '../components';

export const Landing = () => {
  const navigate = useNavigate();

  const onNewGameClicked = () => {
    navigate('/new-game');
  };

  const onSavedGamesClicked = () => {
    navigate('/saved-games');
  };

  return (
    <View>
      <Group>
        <Button onClick={() => onNewGameClicked()}>New Game</Button>
        <Button onClick={() => onSavedGamesClicked()}>Saved Games</Button>
      </Group>
    </View>
  );
};
