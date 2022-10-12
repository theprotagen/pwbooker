import { Button, Group, Table, Tooltip } from '@mantine/core';
import { IconCopy, IconDownload, IconPlayerPlay, IconTrash } from '@tabler/icons';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';
import ago from 's-ago';

import type { SavedGame } from '@/common';

import { api } from '../api';
import { View } from '../components';
import { useGetMeta } from '../hooks';
import { useLoadingStore } from '../stores';
import { downloadFile } from '../utils';

export const SavedGames = () => {
  const navigate = useNavigate();

  const { setLoading } = useLoadingStore();
  const { data: meta } = useGetMeta();

  const onPlayClicked = async (savedGame: SavedGame) => {
    setLoading(true, 'Loading game...');
    api.loadGame(savedGame.id).then(() => {
      setLoading(false);
      navigate('/game');
    });
  };

  const onCloneClicked = async (savedGame: SavedGame) => {
    setLoading(true, 'Cloning game...');
    api.cloneGame(savedGame).then(() => {
      setLoading(false);
    });
  };

  const onDownloadClicked = async (savedGame: SavedGame) => {
    setLoading(true, 'Downloading game...');
    api.exportGame(savedGame).then(json => {
      downloadFile(savedGame.name, json, 'application/json');
      setLoading(false);
    });
  };

  const savedGamesColumnHelper = createColumnHelper<SavedGame>();

  const savedGamesColumns = [
    savedGamesColumnHelper.accessor('name', {
      cell: name => name.getValue(),
    }),
    savedGamesColumnHelper.accessor('dateCreated', {
      cell: dateCreated => ago(dateCreated.getValue()).toString(),
    }),
    savedGamesColumnHelper.accessor('dateModified', {
      cell: dateModified => ago(dateModified.getValue()).toString(),
    }),
    savedGamesColumnHelper.display({
      id: 'actions',
      cell: ({ row }) => (
        <Group>
          <Tooltip label="Play">
            <Button variant="subtle" size="xs" onClick={async () => await onPlayClicked(row.original)}>
              <IconPlayerPlay size={14} />
            </Button>
          </Tooltip>
          <Tooltip label="Clone">
            <Button variant="subtle" size="xs" onClick={async () => await onCloneClicked(row.original)}>
              <IconCopy size={14} />
            </Button>
          </Tooltip>
          <Tooltip label="Download">
            <Button variant="subtle" size="xs" onClick={async () => await onDownloadClicked(row.original)}>
              <IconDownload size={14} />
            </Button>
          </Tooltip>
          <Tooltip label="Delete">
            <Button variant="subtle" size="xs">
              <IconTrash size={14} />
            </Button>
          </Tooltip>
        </Group>
      ),
    }),
  ];

  const savedGamesTable = useReactTable({
    data: meta?.savedGames ?? [],
    columns: savedGamesColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <View title="Saved Games">
      <Group>
        <Table>
          <thead>
            {savedGamesTable.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {savedGamesTable.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Group>
    </View>
  );
};
