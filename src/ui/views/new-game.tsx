import { Button, FileInput, Stack, Switch, TextInput } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import defaultMod from '@/common/data/mods/default.json';

import { api } from '../api';
import { View } from '../components';
import { useLoadingStore } from '../stores';

export const NewGame = () => {
  const navigate = useNavigate();

  const { setLoading } = useLoadingStore();

  const [name, setName] = useState('New Game');
  const [data, setData] = useState<string | undefined>(JSON.stringify(defaultMod));
  const [usingCustomMod, setUsingCustomMod] = useState(false);
  const [modFile, setModFile] = useState<File | null>(null);
  const [canContinue, setCanContinue] = useState(true);

  useEffect(() => {
    if (usingCustomMod) {
      setModFile(null);
      setData(undefined);
    } else {
      setData(JSON.stringify(defaultMod));
      setModFile(null);
    }
  }, [usingCustomMod]);

  useEffect(() => {
    if (modFile) {
      modFile.text().then(results => {
        setData(results);
      });
    } else {
      setData(JSON.stringify(defaultMod));
    }
  }, [modFile]);

  useEffect(() => {
    if (name.length > 0 && data) {
      setCanContinue(true);
    } else {
      setCanContinue(false);
    }
  }, [name, data]);

  const onContinueClicked = async () => {
    if (data) {
      setLoading(true, 'Setting up new game...');

      await api.newGame(name, data);

      setLoading(false);
      navigate('/game');
    }
  };

  return (
    <View title="New Game">
      <Stack>
        <TextInput label="Enter a name for this game." value={name} onChange={e => setName(e.target.value)} />
        <Switch
          label="Use a custom mod."
          checked={usingCustomMod}
          onChange={e => setUsingCustomMod(e.target.checked)}
        />
        {usingCustomMod && (
          <FileInput
            label="Browse for a mod file."
            accept="application/json"
            value={modFile}
            onChange={file => setModFile(file)}
          />
        )}
        <Button disabled={!canContinue} onClick={async () => await onContinueClicked()}>
          Continue
        </Button>
      </Stack>
    </View>
  );
};
