import { Button, Group, Select, Stack, TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createPerson, genders, mapToSelectItem, nationalities, races, sexualities } from '@/common';

import { api } from '../api';
import { View } from '../components';
import { useLoadingStore } from '../stores';

export const CreateUser = () => {
  const navigate = useNavigate();

  const { setLoading } = useLoadingStore();

  const [user, setUser] = useState(createPerson({ user: true }));

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
            data={mapToSelectItem(genders)}
            value={user.gender.toString()}
            onChange={val => setUser({ ...user, gender: Number(val) })}
          />
          <Select
            data={mapToSelectItem(sexualities)}
            value={user.sexuality.toString()}
            onChange={val => setUser({ ...user, sexuality: Number(val) })}
          />
          <Select
            data={mapToSelectItem(races)}
            value={user.race.toString()}
            onChange={val => setUser({ ...user, race: Number(val) })}
          />
          <Select
            data={mapToSelectItem(nationalities)}
            value={user.nationality.toString()}
            onChange={val => setUser({ ...user, nationality: Number(val) })}
          />
        </Group>
        <Group>
          <DatePicker
            label="Birthday"
            value={user.birthday}
            onChange={val => setUser({ ...user, birthday: val ?? new Date() })}
          />
        </Group>
        <Button onClick={async () => await onCreateClicked()}>Create User</Button>
      </Stack>
    </View>
  );
};
