import React, { useState } from 'react';

import { Box, Button, CircularProgress } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

import { WordleRequestItem } from '../../api/api';
import Letter from '../Letter/Letter';
import ColorSelectGroup from '../ColorSelectGroup/ColorSelectGroup';

import styles from './Word.module.css';

type WordProps = {
  word: WordleRequestItem,
  active: boolean,
  handleSubmit: (word: WordleRequestItem) => void,
  handleClueChange: (word: WordleRequestItem, newClue: string, index: number) => void
};

function Word({word, active, handleSubmit, handleClueChange} : WordProps) {
  const letters = Array.from(word.word);
  const [loading, setLoading] = useState(false);

  const handleColorSelect = (newColor: string, index: number) =>
    handleClueChange(word, newColor, index);

  const handleClick = () => {
    setLoading(true);
    handleSubmit(word);
  };

  return (
    <Box display='flex' className={styles.word}>
      {letters.map((letter, index) =>
        <Box key={`b${word + letter + index}`} className={styles.letter}>
          <Letter key={`l${word + letter + index}`} letter={letter} color={word.clue[index]} />
          <ColorSelectGroup active={!loading && active} key={`c${word + letter + index}`}
            index={index} selectColor={handleColorSelect} />
        </Box>
      )}
      <Button name='wordSubmit' disabled={loading} className={`${styles.button} ${(active ? '' : styles.hidden)}`}
        onClick={handleClick}>
        {loading ? <CircularProgress size={24} /> : <CheckIcon className={styles.checkIcon} />}
      </Button>
    </Box>
  );
}

export default Word;
