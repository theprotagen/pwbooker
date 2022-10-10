import { type RenderOptions, render } from '@testing-library/react';
import type { FC, PropsWithChildren, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppProvider } from '@/ui/providers';

const CustomWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouter>
      <AppProvider>{children}</AppProvider>
    </BrowserRouter>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, {
    wrapper: CustomWrapper,
    ...options,
  });

// eslint-disable-next-line
export * from '@testing-library/react';
// eslint-disable-next-line
export { customRender as render };
