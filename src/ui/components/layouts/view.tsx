import type { FC, PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet-async';

import { APP_NAME } from '@/common';

type ViewProps = {
  title?: string;
};

export const View: FC<PropsWithChildren<ViewProps>> = ({ children, title }) => {
  return (
    <>
      <Helmet title={title ? `${title} | ${APP_NAME}` : APP_NAME} />
      {children}
    </>
  );
};
