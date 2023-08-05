import React from 'react';

function WordleBoard(props) {
  return (
    <>
      <h1>This is the wordle board</h1>
      <p>Here are some words: {props.words}</p>
    </>
  );
}

export default WordleBoard;
