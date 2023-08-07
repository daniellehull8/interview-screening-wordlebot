import React, { useState, MouseEvent } from 'react';

import { ButtonGroup, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

import styles from './ColorSelectGroup.module.css';

type ColorSelectGroupProps = {
  active: boolean,
  index: number,
  selectColor: (newColor: string, index: number) => void
};

function ColorSelectGroup({active, index, selectColor}: ColorSelectGroupProps) {
  const [showIcon, setShowIcon] = useState([true, false, false]);
  const clueValues = ['x', 'y', 'g'];

  const handleClick = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
    const color = currentTarget.dataset.clue || '';
    if (color !== '') {
      const colorIndex = clueValues.indexOf(color);
      setShowIcon((prev) => prev.map((c, i) => i === colorIndex));
    }

    selectColor(color, parseInt(currentTarget.dataset.index || '-1'));
  }

  return (
    <div className={`${styles.buttonGroup} ${(active ? '' : styles.hidden)}`}>
      <Button data-clue='x' data-index={index} className={`${styles.white} ${styles.colorButton}`}
        variant='contained' onClick={handleClick}>
        {showIcon[0] ? <CheckIcon className={styles.checkIcon} /> : ''}
      </Button>
      <Button data-clue='y' data-index={index} color='secondary' className={styles.colorButton}
        variant='contained' onClick={handleClick}>
        {showIcon[1] ? <CheckIcon className={styles.checkIcon} /> : ''}
      </Button>
      <Button data-clue='g' data-index={index} color='primary' className={styles.colorButton}
        variant='contained' onClick={handleClick}>
        {showIcon[2] ? <CheckIcon className={styles.checkIcon} /> : ''}
      </Button>
    </div>
  );
}

export default ColorSelectGroup;
