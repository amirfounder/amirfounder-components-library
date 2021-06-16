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
        size--${size.toLowerCase()}
        variant--${variant.toLowerCase()}
      `}
    >
      {children}
    </button>
  )
}

export default Button
