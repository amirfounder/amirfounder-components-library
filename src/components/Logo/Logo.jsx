import React from 'react';
import './Logo.css'

/**
 * @name Logo
 * @description Renders the 'amirfounder' logo
 * @param {*} Props size, onClick
 * @returns Component
 */
export const Logo = ({
  size,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        logo
        logo-size--${size ? size.toLowerCase() : 'medium'}
      `}
    >
      Amir Sharapov
    </div>
  )
}