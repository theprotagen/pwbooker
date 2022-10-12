import { Alert, Button, Group, NumberInput, Select, Stack, TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  bodySizes,
  bodyTypes,
  createPerson,
  genders,
  mapToSelectItem,
  nationalities,
  races,
  sexualities,
} from '@/common';

import { api } from '../api';
import { View } from '../components';
import { useLoadingStore } from '../stores';

const MAX_POINTS = 30;

export const CreateUser = () => {
  const navigate = useNavigate();

  const { setLoading } = useLoadingStore();

  const [user, setUser] = useState(createPerson({ user: true }));
  const [pointsRemaining, setPointsRemaining] = useState(MAX_POINTS);

  useEffect(() => {
    setPointsRemaining(
      MAX_POINTS -
        user.creativity -
        user.diplomacy -
        user.leadership -
        user.motivating -
        user.negotiating -
        user.persuading,
    );
  }, [user]);

  const onCreateClicked = async () => {
    setLoading(true, 'Creating user...');
    await api.newUser(user, true);
    setLoading(false);

    navigate('/game');
  };

  return (
    <View title="Create User">
      <Stack>
        <Group>
          <TextInput
            label="First Name"
            value={user.firstName}
            onChange={e => setUser({ ...user, firstName: e.target.value })}
          />
          <TextInput
            label="Last Name"
            value={user.lastName}
            onChange={e => setUser({ ...user, lastName: e.target.value })}
          />
        </Group>
        <Group>
          <Select
            label="Gender"
            data={mapToSelectItem(genders)}
            value={user.gender.toString()}
            onChange={val => setUser({ ...user, gender: Number(val) })}
          />
          <Select
            label="Sexuality"
            data={mapToSelectItem(sexualities)}
            value={user.sexuality.toString()}
            onChange={val => setUser({ ...user, sexuality: Number(val) })}
          />
          <Select
            label="Race"
            data={mapToSelectItem(races)}
            value={user.race.toString()}
            onChange={val => setUser({ ...user, race: Number(val) })}
          />
          <Select
            label="Nationality"
            data={mapToSelectItem(nationalities)}
            value={user.nationality.toString()}
            onChange={val => setUser({ ...user, nationality: Number(val) })}
          />
        </Group>
        <Group>
          <Select
            label="Body Type"
            data={mapToSelectItem(bodyTypes)}
            value={user.bodyType.toString()}
            onChange={val => setUser({ ...user, bodyType: Number(val) })}
          />
          <Select
            label="Body Size"
            data={mapToSelectItem(bodySizes)}
            value={user.bodySize.toString()}
            onChange={val => setUser({ ...user, bodySize: Number(val) })}
          />
        </Group>
        <Group>
          <DatePicker
            label="Birthday"
            value={user.birthday}
            onChange={val => setUser({ ...user, birthday: val ?? new Date() })}
          />
        </Group>
        <Group>
          <NumberInput
            label="Creativity"
            min={0}
            max={10}
            step={1}
            value={user.creativity}
            onChange={val => setUser({ ...user, creativity: val ?? 0 })}
          />
          <NumberInput
            label="Displomacy"
            min={0}
            max={10}
            step={1}
            value={user.diplomacy}
            onChange={val => setUser({ ...user, diplomacy: val ?? 0 })}
          />
          <NumberInput
            label="Leadership"
            min={0}
            max={10}
            step={1}
            value={user.leadership}
            onChange={val => setUser({ ...user, leadership: val ?? 0 })}
          />

          <NumberInput
            label="Motivating"
            min={0}
            max={10}
            step={1}
            value={user.motivating}
            onChange={val => setUser({ ...user, motivating: val ?? 0 })}
          />
          <NumberInput
            label="Negotiating"
            min={0}
            max={10}
            step={1}
            value={user.negotiating}
            onChange={val => setUser({ ...user, negotiating: val ?? 0 })}
          />
          <NumberInput
            label="Persuading"
            min={0}
            max={10}
            step={1}
            value={user.persuading}
            onChange={val => setUser({ ...user, persuading: val ?? 0 })}
          />
        </Group>
        {pointsRemaining < 0 && (
          <Group>
            <Alert color="red">
              You have used too many points. Please decrease your skills by {Math.abs(pointsRemaining)} point
              {Math.abs(pointsRemaining) > 1 && <span>s</span>}.
            </Alert>
          </Group>
        )}
        <Button disabled={pointsRemaining < 0} onClick={async () => await onCreateClicked()}>
          Create User
        </Button>
      </Stack>
    </View>
  );
};
