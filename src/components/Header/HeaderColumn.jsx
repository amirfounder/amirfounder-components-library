import React from 'react';
import { generateClassNameString } from '../../utils/Generators';
import styles from './Header.module.scss'

const HeaderColumn = (props) => {
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

export default HeaderColumn;