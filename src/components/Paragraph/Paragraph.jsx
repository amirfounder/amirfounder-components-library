import React from 'react';
import { generateClassNameString } from '../../utils/Helpers';
import styles from './Paragraph.module.scss'

/**
 * @name Paragraph
 * @description Renders the paragraph component
 * @param {*} Props children
 * @returns Component
 */
export const Paragraph = (props) => {
  const {
    children,
    classes,
    ...other
  } = props;

  const className =
    generateClassNameString(styles, classes)

  return (
    <p
      className={className}
      {...other}
    >
      {children}
    </p>
  )
}