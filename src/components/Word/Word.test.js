import { render, fireEvent } from '@testing-library/react';
import { queryByAttribute } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

import Word from './Word';

describe('Word component', () => {
  test('renders active button initially', () => {
    const word = { word: 'irate', clue: 'xxxxx' };

    const { container } = render(<Word word={word} active={true} handleSubmit={() => {}} handleClueChange={() => {}} />);

    const button = container.querySelector('button');

    expect(button).toBeEnabled();
  });

  test('renders disabled button after click event', () => {
    const word = { word: 'irate', clue: 'xxxxx' };

    const { container } = render(<Word word={word} active={true} handleSubmit={() => {}} handleClueChange={() => {}} />);

    const button = queryByAttribute('name', container, 'wordSubmit');

    fireEvent.click(button);

    expect(button).toBeDisabled();
  });
});
