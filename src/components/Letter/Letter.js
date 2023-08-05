import React from 'react';
import { Paper } from '@mui/material';
import styles from './Letter.module.css';

function Letter(props) {
  return (
    <>
      <Paper elevation={4} className={styles.square}>{props.letter.toUpperCase()}</Paper>
    </>
  );
}

export default Letter;
