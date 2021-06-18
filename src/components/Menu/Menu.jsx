import React from 'react';
import './Menu.css'

export const Menu = ({
  children,
  direction,
  alignment,
  className
}) => {
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
