import React from 'react';
import { generateClassNameString } from '../../utils/Helpers';
import styles from './Modal.module.scss'

const ModalBox = (props) => {
  const {
    children,
    classes,
    ...other
  } = props;

  const className =
    generateClassNameString(styles, classes)
  
  return (
    <Box
      className={className}
      {...other}
    >
      {children}
    </Box>
  )
}

export default ModalBox
