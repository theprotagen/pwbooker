import { Route, Routes } from 'react-router-dom';

import { AppLayout, GameLayout } from '../components';
import { lazyImport } from '../utils';

const { CreateUser } = lazyImport(() => import('@/ui/views/create-user'), 'CreateUser');
const { Dashboard } = lazyImport(() => import('@/ui/views/dashboard'), 'Dashboard');
const { Landing } = lazyImport(() => import('@/ui/views/landing'), 'Landing');
const { NewGame } = lazyImport(() => import('@/ui/views/new-game'), 'NewGame');

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Landing />} />
        <Route path="new-game" element={<NewGame />} />
      </Route>
      <Route path="/game" element={<GameLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="create-user" element={<CreateUser />} />
      </Route>
    </Routes>
  );
};
