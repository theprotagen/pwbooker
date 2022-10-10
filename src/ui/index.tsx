import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app';
import { ErrorBoundary } from './errors';
import { AppProvider } from './providers';

const app = document.getElementById('app') as HTMLElement;
const root = createRoot(app);

root.render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>,
);
