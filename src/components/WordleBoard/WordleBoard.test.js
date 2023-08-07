import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import WordleBoard from './WordleBoard';

describe('WordleBoard component', () => {
  test('renders correct number of Word components', () => {
    const words = [
      { word: 'irate', clue: 'xxxxx' },
      { word: 'tests', clue: 'xxxxx' },
      { word: 'again', clue: 'xxxxx' }
    ];

    const { container } = render(<WordleBoard words={words} complete={false} handleSubmit={() => {}} handleClueChange={() => {}} />);

    const wordComponents = container.getElementsByClassName('word');
    
    expect(wordComponents.length).toBe(3);
  });
});
