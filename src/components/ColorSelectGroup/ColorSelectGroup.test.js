import { render } from '@testing-library/react';
import { queryByAttribute } from '@testing-library/dom';

import ColorSelectGroup from './ColorSelectGroup';

describe('ColorSelectGroup component', () => {
  test('renders the initial component', () => {
    const { container } = render(<ColorSelectGroup active={true} index={0} selectColor={() => {}} />);

    const buttons = container.querySelectorAll('button');
    const whiteButton = queryByAttribute('name', container, 'whiteButton');
    const yellowButton = queryByAttribute('name', container, 'yellowButton');
    const greenButton = queryByAttribute('name', container, 'greenButton');

    expect(buttons.length).toBe(3);

    expect(whiteButton.getAttribute('data-clue')).toBe('x');
    expect(whiteButton.getAttribute('data-index')).toBe('0');

    expect(yellowButton.getAttribute('data-clue')).toBe('y');
    expect(yellowButton.getAttribute('data-index')).toBe('1');

    expect(greenButton.getAttribute('data-clue')).toBe('g');
    expect(greenButton.getAttribute('data-index')).toBe('2');
  });
});
