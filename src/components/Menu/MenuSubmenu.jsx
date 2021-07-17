import React from 'react';
import { generateClassNameString } from '../../utils/Helpers';
import styles from './Menu.module.scss'

const MenuSubmenu = (props) => {
  const {
    children,
    classes,
    distance,
    ...other
  } = props;

  const className =
    generateClassNameString(styles, classes)
  
  return (
    <div
      className={className}
      style={{
        paddingTop: distance
      }}
      {...other}
    >
      {children}
    </div>
  )
}

export default MenuSubmenu
