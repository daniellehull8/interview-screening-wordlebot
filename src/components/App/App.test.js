import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

describe('App component', () => {
  test('renders initial loading indicator', () => {
    const { container, getByRole } = render(<App />);

    const progressIndicator = getByRole('progressbar');

    expect(progressIndicator).toBeInTheDocument();
  });

  test('loading indicator disappears after initial load', async () => {
    const { container, getByRole } = render(<App />);

    const progressIndicator = getByRole('progressbar');

    expect(progressIndicator).toBeInTheDocument();

    await waitFor(() => {
      const wordComponents = container.getElementsByClassName('word');
      
      expect(wordComponents.length).toBe(1);
    }, { timeout: 10000 });
  });
});
