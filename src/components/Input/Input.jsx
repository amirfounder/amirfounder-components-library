import React from 'react';
import { generateClassNameString } from '../../utils/Helpers';
import styles from './Input.module.scss'

/**
 * @name Input
 * @description Renders the Input component
 * @param {*} props Props
 * @returns Component
 */
export const Input = (props) => {
  const {
    children,
    classes,
    ...other
  } = props;

  const className =
    generateClassNameString(styles, classes)

  return(
    <input
      className={className}
      {...other}
    />
  )
}