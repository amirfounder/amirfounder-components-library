import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import { generateClassNameString } from '../../utils/Generators';

/**
 * @nmae Button
 * @description Renders the Button component
 * @param {*} props Props
 * @prop classes
 * @prop label
 * @returns Component
 */
export const Button = (props) => {

  const {
    children,
    label,
    classes,
    ...other
  } = props

  const classesArr = classes?.split(' ')

  let className = generateClassNameString(styles, classesArr)

  return (
    <button
      className={className}
      {...other}
    >
      {children || label}
    </button>
  )
}
