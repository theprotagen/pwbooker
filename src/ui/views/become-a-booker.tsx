import { Select } from '@mantine/core';

import { useGetCompanies } from '@/ui/hooks';

import { View } from '../components';

export const BecomeABooker = () => {
  const { data: companies } = useGetCompanies();

  return (
    <View title="Become A Booker">
      <Select
        label="Select a company to book for."
        data={companies?.map(company => ({ label: company.name, value: company.id.toString() })) ?? []}
      />
    </View>
  );
};
