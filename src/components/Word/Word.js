import React, { useState } from 'react';
import Letter from '../Letter/Letter';
import ColorSelectGroup, { ButtonColor } from '../ColorSelectGroup/ColorSelectGroup';
import { Box, Button, CircularProgress } from '@mui/material';
import styles from './Word.module.css';

function Word(props) {
  const letters = [...props.word];
  const [clue, setClue] = useState(['x', 'x', 'x', 'x', 'x']);
  const [loading, setLoading] = useState(false);

  const handleColorSelect = (newColor, index) => {
    setClue((prev) => prev.map((color, i) => i === index ? newColor : color));
  };

  const handleClick = (event) => {
    console.log(clue.join(''));
    setLoading(true);
    props.handleSubmit(props.word, clue.join(''));
  };

  return (
    <div style={{display: 'flex'}}>
      {letters.map((letter, index) =>
        <Box key={'b' + props.word + letter + index} className={styles.word}>
          <Letter key={'l' + props.word + letter + index} letter={letter} color={clue[index]} />
          <ColorSelectGroup active={!loading && props.active} key={'c' + props.word + letter + index} index={index} selectColor={handleColorSelect} />
        </Box>
      )}
      <Button className={styles.button + ' ' + (props.active ? '' : styles.hidden)} onClick={handleClick}>
        {loading ? <CircularProgress size={24} /> : '>'}
      </Button>
    </div>
  );
}

export default Word;
