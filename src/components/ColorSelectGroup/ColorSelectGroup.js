import React from 'react';
import { ButtonGroup, Button } from '@mui/material';
import styles from './ColorSelectGroup.module.css';

export type ButtonColor = 'g' | 'y' | 'x';

function ColorSelectGroup(props) {

  const handleClick = ({ target }) => {
    props.selectColor(target.name[0], parseInt(target.name[1]));
  };

  return (
    <div className={styles.buttonGroup + ' ' + (props.active ? '' : styles.hidden)}>
      <Button name={'x' + props.index} className={styles.white + ' ' + styles.colorButton}
        variant='outlined' onClick={handleClick}></Button>
      <Button name={'y' + props.index} className={styles.yellow + ' ' + styles.colorButton}
        variant='outlined' onClick={handleClick}></Button>
      <Button name={'g' + props.index} className={styles.green + ' ' + styles.colorButton}
        variant='outlined' onClick={handleClick}></Button>
    </div>
  );
}

export default ColorSelectGroup;
