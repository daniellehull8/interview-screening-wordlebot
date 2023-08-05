import React from 'react';
import Word from '../Word/Word';

type WordleBoardProps = {
  words: string[],
  complete: boolean,
  handleSubmit: (word: string, clue: string) => void
};

function WordleBoard({words, complete, handleSubmit}: WordleBoardProps) {

  return (
    <>
      {words.map((word, index) =>
        <Word key={word + index} word={word} active={index === words.length - 1 && !complete} handleSubmit={handleSubmit} />
      )}
    </>
  );
}

export default WordleBoard;
