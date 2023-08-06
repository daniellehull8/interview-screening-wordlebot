import React, { MouseEvent } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import styles from './ColorSelectGroup.module.css';

type ColorSelectGroupProps = {
  active: boolean,
  index: number,
  selectColor: (newColor: string, index: number) => void
};

function ColorSelectGroup({active, index, selectColor}: ColorSelectGroupProps) {

  const handleClick = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
    selectColor(currentTarget.dataset.clue || '', parseInt(currentTarget.dataset.index || '-1'));
  }

  return (
    <div className={`${styles.buttonGroup} ${(active ? '' : styles.hidden)}`}>
      <Button data-clue='x' data-index={index} className={`${styles.white} ${styles.colorButton}`}
        variant='contained' onClick={handleClick}></Button>
      <Button data-clue='y' data-index={index} color='secondary' className={styles.colorButton}
        variant='contained' onClick={handleClick}></Button>
      <Button data-clue='g' data-index={index} color='primary' className={styles.colorButton}
        variant='contained' onClick={handleClick}></Button>
    </div>
  );
}

export default ColorSelectGroup;
