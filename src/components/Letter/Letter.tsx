import React from 'react';

import { Paper } from '@mui/material';

import styles from './Letter.module.css';

type LetterProps = {
  letter: string,
  color: string
};

function Letter({ letter, color }: LetterProps) {
  const setStyleColor = () => {
    switch (color.toUpperCase()) {
      case 'G':
        return styles.green;
      case 'Y':
        return styles.yellow;
      case 'X':
        return styles.white;
      default:
        return '';
    }
  };

  return (
    <>
      <Paper elevation={4} className={`${styles.square} ${setStyleColor()}`}>
        {letter.toUpperCase()}
      </Paper>
    </>
  );
}

export default Letter;
