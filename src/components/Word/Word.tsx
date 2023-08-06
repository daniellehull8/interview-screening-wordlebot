import React, { useState } from 'react';
import Letter from '../Letter/Letter';
import ColorSelectGroup, { ButtonColor } from '../ColorSelectGroup/ColorSelectGroup';
import { Box, Button, CircularProgress } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import styles from './Word.module.css';

type WordProps = {
  word: string,
  active: boolean,
  handleSubmit: (word: string, clue: string) => void
};

function Word({word, active, handleSubmit} : WordProps) {
  const letters = Array.from(word);
  const [clue, setClue] = useState(['x', 'x', 'x', 'x', 'x']);
  const [loading, setLoading] = useState(false);

  const handleColorSelect = (newColor: string, index: number) => {
    setClue((prev) => prev.map((color, i) => i === index ? newColor : color));
  };

  const handleClick = () => {
    console.log(clue.join(''));
    setLoading(true);
    handleSubmit(word, clue.join(''));
  };

  return (
    <Box display='flex' className={styles.word}>
      {letters.map((letter, index) =>
        <Box key={'b' + word + letter + index} className={styles.letter}>
          <Letter key={'l' + word + letter + index} letter={letter} color={clue[index]} />
          <ColorSelectGroup active={!loading && active} key={'c' + word + letter + index} index={index} selectColor={handleColorSelect} />
        </Box>
      )}
      <Button disabled={loading} className={styles.button + ' ' + (active ? '' : styles.hidden)} onClick={handleClick}>
        {loading ? <CircularProgress size={24} /> : <CheckIcon className={styles.checkIcon} />}
      </Button>
    </Box>
  );
}

export default Word;
