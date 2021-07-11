import React from 'react';
import { useThemeContext } from '../Theme/Theme';
import StyledSubMenu from './SubMenuStyles';
import { Menu } from '../Menu/Menu';

export const SubMenu = (props) => {
  const theme = useThemeContext();

  return (
    <StyledSubMenu
      className='af-submenu'
      {...props}
    >
      <Menu
        direction="vertical"
      >
        {props.children}
      </Menu>
    </StyledSubMenu>
  )
}