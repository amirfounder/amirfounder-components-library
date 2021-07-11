import React from 'react';
import { generateClassNameString } from '../../utils/Helpers';
import styles from './Box.module.scss'

/**
 * @name Box
 * @description Renders the Box component
 * @param {*} props Props
 * @returns Component
 */
export const Box = (props) => {
  const {
    children,
    classes,
    ...other
  } = props;

  const className =
    generateClassNameString(
      styles,
      classes
        ?.split(' ')
    )

  return(
    <div
      className={className}
      {...other}
    >
      {props.children}
    </div>
  )
}
