import { Stack, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

import { useGetUserCompany } from '@/ui/hooks';

export const GameNavbar = () => {
  const { data: userCompany } = useGetUserCompany();

  return (
    <Stack>
      {userCompany?.id !== -1 && (
        <Stack spacing={1}>
          <Text weight="bold">{userCompany?.shortName}</Text>
        </Stack>
      )}
      <Stack spacing={1}>
        <Text weight="bold">World</Text>
        <Link to="/game/companies">Companies</Link>
        <Link to="/game/people">People</Link>
      </Stack>
    </Stack>
  );
};
