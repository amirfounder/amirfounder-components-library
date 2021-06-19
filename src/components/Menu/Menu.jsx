import React, { useEffect } from 'react';
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
  className,
  variant,
  size
}) => {
  // MAKE THE LIST BE POSSIBLE TO BE VERTICAL

  useEffect(() => {
    size &&
    document.getElementsByClassName('menu')
      .forEach((ele) => ele.style.setProperty('font-size', size))
  })

  return (
    <div
      className={`
        menu
        menu-direction--${direction ? direction.toLowerCase() : 'horizontal'}
        menu-alignment--${alignment ? alignment.toLowerCase() : 'center'}
        menu-variant--${variant ? variant.toLowerCase() : 'primary'}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
