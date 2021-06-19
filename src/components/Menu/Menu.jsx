import React from 'react';
import MenuChildDiv from './MenuStyles';
import './Menu.css';

/**
 * @name Menu
 * @description Renders a Navigation Menu. Requires at LEAST TWO children.
 * @recommendedChild Link Props
 * @param {*} Props children, direction, alignment, className
 * @returns Component
 */
export const Menu = ({
  children,
  direction,
  alignment,
}) => {

  return (
    <div className='menu' >
      {children &&
        !children.length &&
        <MenuChildDiv
          direction={direction ? direction : 'horizontal'}
          alignment={alignment ? alignment : 'left'}
        >
          {children}
        </MenuChildDiv>
      }
      {children &&
        children.length > 1 &&
        children.map((child) => (
          <MenuChildDiv
            direciton={direction ? direction : 'horizontal'}
            alignment={alignment ? alignment : 'left'}
          >
            {child}
          </MenuChildDiv>
        ))}
    </div>
  )
}
