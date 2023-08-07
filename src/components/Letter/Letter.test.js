import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Letter from './Letter';

describe('Letter component', () => {
  test('renders a green paper', () => {
    const letter = 't';
    const color = 'g';
    const { queryByText } = render(<Letter letter={letter} color={color} />);

    const paperElement = queryByText(letter.toUpperCase());

    expect(paperElement).toBeInTheDocument();
    expect(paperElement).toHaveClass('green');
  });

  test('renders a yellow paper', () => {
    const letter = 'console.warn();';
    const color = 'y';
    const { queryByText } = render(<Letter letter={letter} color={color} />);

    const paperElement = queryByText(letter.toUpperCase());

    expect(paperElement).toBeInTheDocument();
    expect(paperElement).toHaveClass('yellow');
  });

  test('renders a white paper', () => {
    const letter = 's';
    const color = 'x';
    const { queryByText } = render(<Letter letter={letter} color={color} />);

    const paperElement = queryByText(letter.toUpperCase());

    expect(paperElement).toBeInTheDocument();
    expect(paperElement).toHaveClass('white');
  });
});
