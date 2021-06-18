import React from 'react';
import './Logo.css'

export const Logo = ({
  size,
  onClick
}) => {
  return(
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