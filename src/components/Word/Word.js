import React from 'react';
import Letter from '../Letter/Letter';
import ColorSelectGroup from '../ColorSelectGroup/ColorSelectGroup';

function Word(props) {
  const letters = [...props.word];
  return (
    <div style={{display: 'flex'}}>
      {letters.map((letter, index) =>
        <>
          <Letter key={props.word + letter + index} letter={letter} />
          
        </>
      )}
    </div>
  );
}

export default Word;
