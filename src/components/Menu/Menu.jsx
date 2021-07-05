import React from 'react';
import { useThemeContext } from '../Theme/Theme';
import {
  MenuDiv,
  MenuChildDiv
} from './MenuStyles';

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
    <MenuDiv
      alignment={props.alignment ? props.alignment : 'left'}
      className='af-menu'
      direction={props.direction ? props.direction : 'horizontal'}
      theme={theme}
      {...props}
    >
      {props.children && !props.children.length &&
        <MenuChildDiv
          alignment={props.alignment ? props.alignment : 'left'}
          className='af-menu-child'
          direction={props.direction ? props.direction : 'horizontal'}
          theme={theme}
          {...props}
        >
          {props.children}
        </MenuChildDiv>
      }
      {props.children && props.children.length > 1 &&
        props.children.map((child, index) => (
          <MenuChildDiv
            alignment={props.alignment ? props.alignment : 'left'}
            className='af-menu-child'
            direciton={props.direction ? props.direction : 'horizontal'}
            key={child + index}
            theme={theme}
            {...props}
          >
            {child}
          </MenuChildDiv>
        ))}
    </MenuDiv>
  )
}
