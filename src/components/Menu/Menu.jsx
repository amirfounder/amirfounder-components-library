import React from 'react';
import './Menu.css'

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
  className
}) => {
  // MAKE THE LIST BE POSSIBLE TO BE VERTICAL
  return (
    <div>
      {children.length > 1 && children.map((child, index) => (
        <div
          key={child + index}
          className={`
            menu
            menu-child-wrapper-direction--${direction ? direction.toLowerCase() : 'horizontal'}
            menu-child-wrapper-alignment--${alignment ? alignment.toLowerCase() : 'center'}
            ${className}
          `}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
