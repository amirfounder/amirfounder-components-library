import React from 'react';
import { MenuDiv, MenuChildDiv } from './MenuStyles';
import './Menu.css';

/**
 * @name Menu
 * @description Renders a Navigation Menu. Requires at LEAST TWO children.
 * @recommendedChild Link Props
 * @param {*} Props children, direction, alignment, className
 * @returns Component
 */
export const Menu = (props) => {

  return (
    <MenuDiv
      alignment={props.alignment}
      className='menu'
    >
      {props.children && !props.children.length &&
        <MenuChildDiv
          direction={props.direction ? props.direction : 'horizontal'}
          alignment={props.alignment ? props.alignment : 'left'}
        >
          {props.children}
        </MenuChildDiv>
      }
      {props.children && props.children.length > 1 &&
        props.children.map((child, index) => (
          <MenuChildDiv
            key={child + index}
            direciton={props.direction ? props.direction : 'horizontal'}
            alignment={props.alignment ? props.alignment : 'left'}
          >
            {child}
          </MenuChildDiv>
        ))}
    </MenuDiv>
  )
}
