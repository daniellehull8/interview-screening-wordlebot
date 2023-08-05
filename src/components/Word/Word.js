import React from 'react';
import Letter from '../Letter/Letter';
import ColorSelectGroup from '../ColorSelectGroup/ColorSelectGroup';
import { Box } from '@mui/material';
import styles from './Word.module.css';

function Word(props) {
  const letters = [...props.word];
  return (
    <div style={{display: 'flex'}}>
      {letters.map((letter, index) =>
        <Box className={styles.word}>
          <Letter key={props.word + letter + index} letter={letter} />
          <ColorSelectGroup />
        </Box>
      )}
    </div>
  );
}

export default Word;
