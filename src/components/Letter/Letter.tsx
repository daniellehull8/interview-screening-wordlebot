import React from 'react';
import { Paper } from '@mui/material';
import styles from './Letter.module.css';

type LetterProps = {
  letter: string,
  color: string
};

function Letter({ letter, color }: LetterProps) {
  const setStyleColor = () => {
    switch (color) {
      case 'g':
        return styles.green;
      case 'y':
        return styles.yellow;
      case 'x':
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
