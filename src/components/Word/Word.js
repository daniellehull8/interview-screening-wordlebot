import React from 'react';
import Letter from '../Letter/Letter';
import ColorSelectGroup from '../ColorSelectGroup/ColorSelectGroup';

function Word(props) {
  const letters = [...props.word];
  return (
    <>
      {letters.map((letter, index) =>
        <>
          <Letter key={props.word + letter + index} letter={letter} />
          <ColorSelectGroup />
        </>
      )}
    </>
  );
}

export default Word;
