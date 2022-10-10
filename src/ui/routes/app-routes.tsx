import { Route, Routes } from 'react-router-dom';

import { AppLayout, GameLayout } from '../components';
import { lazyImport } from '../utils';

const { Dashboard } = lazyImport(() => import('@/ui/views/dashboard'), 'Dashboard');
const { Landing } = lazyImport(() => import('@/ui/views/landing'), 'Landing');

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Landing />} />
      </Route>
      <Route path="/game" element={<GameLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
