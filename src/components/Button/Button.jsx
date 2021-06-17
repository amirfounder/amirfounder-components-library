import React from 'react';
import './Button.css';

export const Button = ({
  children="Learn More",
  onClick,
  size="Medium",
  variant="Primary"
}) => {

  return(
    <button
      onClick={onClick}
      className={`
        button
        button-size--${size.toLowerCase()}
        button-variant--${variant.toLowerCase()}
      `}
    >
      {children}
    </button>
  )
}
