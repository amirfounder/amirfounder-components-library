import React from 'react';
import './Column.css'

export const Column = ({
  children,
  alignment
}) => {
  return(
    <div
      className={`
        column
      `}
      style={{
        justifySelf: `${alignment ? alignment.toLowerCase() : 'start'}`
      }}
    >
      {children}
    </div>
  )
}