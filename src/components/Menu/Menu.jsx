import React from 'react';
import './Menu.css'

export const Menu = ({
  children,
  spacingDirection
}) => {
  return(
    <div
      className={`
        menu-spacing-direction--${spacingDirection}
      `}
    >
      {children.map((child) => (
        <span>{child}</span>
      ))}
    </div>
  )
}
