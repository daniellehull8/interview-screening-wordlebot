import React, { MouseEvent } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import styles from './ColorSelectGroup.module.css';

export type ClueLetter = 'g' | 'y' | 'x';

type ColorSelectGroupProps = {
  active: boolean,
  index: number,
  selectColor: (newColor: string, index: number) => void
};

function ColorSelectGroup({active, index, selectColor}: ColorSelectGroupProps) {

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    selectColor(event.currentTarget.name[0], parseInt(event.currentTarget.name[1]));
  };

  return (
    <div className={styles.buttonGroup + ' ' + (active ? '' : styles.hidden)}>
      <Button name={'x' + index} className={styles.white + ' ' + styles.colorButton}
        variant='contained' onClick={handleClick}></Button>
      <Button color='secondary' name={'y' + index} className={styles.colorButton}
        variant='contained' onClick={handleClick}></Button>
      <Button color='primary' name={'g' + index} className={styles.colorButton}
        variant='contained' onClick={handleClick}></Button>
    </div>
  );
}

export default ColorSelectGroup;
