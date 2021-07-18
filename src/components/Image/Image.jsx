import React from 'react';
import { generateClassNameString } from '../../utils/Helpers';
import styles from 'Image.module.scss';

export const Image = (props) => {
  const {
    classes,
    ...other
  } = props;

  const className =
    generateClassNameString(styles, classes)

  return (
    <img
      className={className}
      {...other}
    />
  )
}