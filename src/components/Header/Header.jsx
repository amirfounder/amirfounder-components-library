import React from 'react'
import HeaderColumn from './HeaderColumn'
import styles from './Header.module.scss'
import { generateClassNameString } from '../../utils/Generators';

/**
 * @name Header
 * @description Renders the Header compoennt
 * @param {*} props Props
 * @prop backgroundColor
 * @prop theme
 * @prop height
 * @prop maxHeight
 * @prop minHeight
 * @prop padding
 * @prop shadow
 * @prop size
 * @returns Component
 */


export const Header = (props) => {
  const {
    classes,
    children,
    ...other
  } = props;

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

Header.Column = HeaderColumn;