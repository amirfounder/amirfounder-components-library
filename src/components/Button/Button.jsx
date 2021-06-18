import React from 'react';
import './Button.css';

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
