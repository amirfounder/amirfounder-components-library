import React, { useRef } from 'react';
import { generateClassNameString } from '../../utils/Helpers';
import styles from './Menu.module.scss'
import MenuSubmenu from './MenuSubmenu';
import MenuItem from './MenuItem';

/**
 * @name Menu
 * @description Renders the Menu component
 * @param {*} props Props
 * @returns Component
 */
export const Menu = (props) => {
  const {
    children,
    classes,
    ...other
  } = props;

  const menuRef = useRef(null);

  const className =
    generateClassNameString(styles, classes);

  const hideMenu = () => {
  }

  return (
    <div
      onClick={() => console.log('clicked')}
      ref={menuRef}
      onClick={hideMenu}
      className={className}
      {...other}
    >
      {props.children}
    </div>
  )
}

Menu.Item = MenuItem
Menu.Submenu = MenuSubmenu