import React from 'react';
import { generateClassNameString } from '../../utils/Helpers';
import styles from './Column.module.scss';

/**
 * @name Column
 * @description Renders the Column Component
 * @param {*} props Props
 * @prop alignment
 * @prop theme
 * @returns Component
 */
export const Column = (props) => {
  const {
    children,
    classes,
    ...other
  } = props

  const className =
  generateClassNameString(
    styles,
    classes
      ?.split(' ')
  )

  return (
    <div
      className={className}
      {...other}
    >
      {children}
    </div>
  )
}