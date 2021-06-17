import React from 'react';
import './Column.css'

export const Column = ({
  children,
  justifySelf
}) => {
  return(
    <div
      className={`
        column
      `}
      style={{
        justifySelf: `${
          justifySelf ?
          justifySelf : 'start'
        }`
      }}
    >
      {children}
    </div>
  )
}