import React from 'react';
import Word from '../Word/Word';
import { WordleRequest, WordleRequestItem } from '../../api/api';

type WordleBoardProps = {
  words: WordleRequest,
  complete: boolean,
  handleSubmit: (word: WordleRequestItem) => void,
  handleClueChange: (word: WordleRequestItem, newClue: string, index: number) => void
};

function WordleBoard({words, complete, handleSubmit, handleClueChange}: WordleBoardProps) {

  return (
    <>
      {words.map((word, index) =>
        <Word key={word.word + index} word={word} active={index === words.length - 1 && !complete}
          handleSubmit={handleSubmit} handleClueChange={handleClueChange} />
      )}
    </>
  );
}

export default WordleBoard;
