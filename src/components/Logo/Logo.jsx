import React from 'react';
import './Logo.css'

export const Logo = ({
  size='medium',
  onClick
}) => {
  return(
    <div
      onClick={onClick}
      className={`
        logo
        logo-size--${size}
      `}
    >
      Amir Sharapov
    </div>
  )
}