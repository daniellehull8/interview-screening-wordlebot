import React from 'react';
import { ButtonGroup, Button } from '@mui/material';
import styles from './ColorSelectGroup.module.css';

function ColorSelectGroup() {
  return (
    <div className={styles.buttonGroup}>
      <Button className={styles.white + ' ' + styles.colorButton} variant='outlined'></Button>
      <Button className={styles.yellow + ' ' + styles.colorButton} variant='outlined'></Button>
      <Button className={styles.green + ' ' + styles.colorButton} variant='outlined'></Button>
    </div>
  );
}

export default ColorSelectGroup;
