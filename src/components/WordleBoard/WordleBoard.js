import React from 'react';
import Word from '../Word/Word';

function WordleBoard(props) {

  return (
    <>
      {props.words.map((word, index) =>
        <Word key={word + index} word={word} active={index === props.words.length - 1} handleSubmit={props.handleSubmit} />
      )}
    </>
  );
}

export default WordleBoard;
