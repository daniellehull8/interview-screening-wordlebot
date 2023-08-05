import React, { useState } from 'react';
import Letter from '../Letter/Letter';
import ColorSelectGroup, { ButtonColor } from '../ColorSelectGroup/ColorSelectGroup';
import { Box, Button } from '@mui/material';
import styles from './Word.module.css';

function Word(props) {
  const letters = [...props.word];
  const [clue, setClue] = useState(['x', 'x', 'x', 'x', 'x']);

  const handleColorSelect = (newColor, index) => {
    setClue((prev) => prev.map((color, i) => i === index ? newColor : color));
  };

  const handleClick = (event) => {
    console.log(clue.join(''));
    props.handleSubmit(props.word, clue.join(''));
  };

  return (
    <div style={{display: 'flex'}}>
      {letters.map((letter, index) =>
        <Box key={'b' + props.word + letter + index} className={styles.word}>
          <Letter key={'l' + props.word + letter + index} letter={letter} color={clue[index]} />
          <ColorSelectGroup key={'c' + props.word + letter + index} index={index} selectColor={handleColorSelect} />
        </Box>
      )}
      <Button className={styles.button} onClick={handleClick}>></Button>
    </div>
  );
}

export default Word;
