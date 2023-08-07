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

  const handleClick = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
    const buttonIndex = parseInt(currentTarget.dataset.index || '-1');

    if (buttonIndex !== -1) {
      setShowIcon((prev) => prev.map((c, i) => i === buttonIndex));
    }

    selectColor(currentTarget.dataset.clue || '', index);
  }

  return (
    <div className={`${styles.buttonGroup} ${(active ? '' : styles.hidden)}`}>
      <Button name='whiteButton' data-clue='x' data-index='0' className={`${styles.white} ${styles.colorButton}`}
        variant='contained' onClick={handleClick}>
        {showIcon[0] ? <CheckIcon className={styles.checkIcon} /> : ''}
      </Button>
      <Button name='yellowButton' data-clue='y' data-index='1' color='secondary' className={styles.colorButton}
        variant='contained' onClick={handleClick}>
        {showIcon[1] ? <CheckIcon className={styles.checkIcon} /> : ''}
      </Button>
      <Button name='greenButton' data-clue='g' data-index='2' color='primary' className={styles.colorButton}
        variant='contained' onClick={handleClick}>
        {showIcon[2] ? <CheckIcon className={styles.checkIcon} /> : ''}
      </Button>
    </div>
  );
}

export default ColorSelectGroup;
