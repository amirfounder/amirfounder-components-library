import React from 'react';
import { generateClassNameString } from '../../utils/Helpers';
import styles from './Modal.module.scss'

const ModalBackground = (props) => {
  const {
    children,
    classes,
    ...other
  } = props;

  const className =
    generateClassNameString(styles, classes)
  
  return (
    <div
      className={className}
      {...other}
    >
      {children}
    </div>
  )
}

export default ModalBackground