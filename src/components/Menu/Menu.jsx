import React from 'react';
import { useThemeContext } from '../Theme/Theme';
import { StyledMenu } from './MenuStyles';

/**
 * @name Menu
 * @description Renders the Menu component
 * @param {*} props Props
 * @prop alignment
 * @prop direction - vertical or horizontal
 * @prop theme
 * @prop padding
 * @prop spaceBetween
 * @returns Component
 */
export const Menu = (props) => {
  const theme = useThemeContext();

  return (
    <StyledMenu
      className='af-menu'
      theme={theme ? theme : null}
      {...props}
    >
      {props.children}
    </StyledMenu>
  )
}
