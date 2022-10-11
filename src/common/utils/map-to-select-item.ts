import type { SelectItem } from '@mantine/core';

export const mapToSelectItem = <T>(map: Map<T, Partial<{ label: string }>>): SelectItem[] =>
  Array.from(map.entries()).map(entry => ({
    // @ts-ignore
    value: entry[0].toString(),
    // eslint-disable-next-line
    label: entry[1].label!,
  }));
