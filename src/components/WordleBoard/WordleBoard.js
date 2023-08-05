import React from 'react';
import Word from '../Word/Word';

function WordleBoard(props) {
  return (
    <>
      <h1>This is the wordle board</h1>
      {props.words.map((word, index) =>
        <Word key={word + index} word={word} />
      )}
    </>
  );
}

export default WordleBoard;
