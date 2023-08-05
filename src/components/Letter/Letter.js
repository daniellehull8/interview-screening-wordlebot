import React from 'react';
import { Paper } from '@mui/material';
import styles from './Letter.module.css';

function Letter(props) {
  const setStyleColor = () => {
    switch (props.color) {
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
      <Paper elevation={4} className={styles.square + ' ' + setStyleColor()}>{props.letter.toUpperCase()}</Paper>
    </>
  );
}

export default Letter;
