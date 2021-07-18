import React from 'react';
import { generateClassNameString } from '../../utils/Helpers';
import styles from './Menu.module.scss'

const MenuItem = (props) => {
  const {
    children,
    classes,
    ...other
  } = props;

  const className =
    generateClassNameString(styles, classes)

  return (
    <div
      onClick={() => console.log('clicked')}
      className={className}
      {...other}
    >
      {children}
    </div>
  )
}

export default MenuItem
