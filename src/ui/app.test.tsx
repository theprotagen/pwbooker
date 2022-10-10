import { act, render, screen } from '@/test';

import { App } from './app';

describe('<App />', () => {
  it('renders without errors', async () => {
    await act(async () => {
      render(<App />);
      expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
    });
  });
});
