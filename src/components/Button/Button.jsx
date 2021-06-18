import React from 'react';
import './Button.css';

/**
 * @name Button
 * @description Renders a button
 * @param {*} param0 children, onClick, size, variant
 * @returns Component
 */
export const Button = ({
  children,
  onClick,
  size,
  variant
}) => {

  return (
    <button
      onClick={onClick}
      className={`
        button
        button-size--${size ? size.toLowerCase() : 'medium'}
        button-variant--${variant ? variant.toLowerCase() : 'primary'}
      `}
    >
      {children}
    </button>
  )
}
