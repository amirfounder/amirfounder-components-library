import React from 'react';
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

  const className =
    generateClassNameString(styles, classes);

  return (
    <div
      className={className}
      {...other}
    >
      {props.children}
    </div>
  )
}

Menu.Item = MenuItem
Menu.Submenu = MenuSubmenu