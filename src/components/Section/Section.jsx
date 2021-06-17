import React from 'react';
import './Section.css'

export const Section = ({
  gridTemplateColumns,
  children,
  className,
  sidePadding,
  backgroundColor
}) => {
  return(
    <div
      className={`
        section
        ${className}
      `}
      style={{
        gridTemplateColumns: `${
          gridTemplateColumns ? // IF GRID TEMPLATE COLUMNS IS DEFINED
          gridTemplateColumns : // DISPLAY GRID TEMPLATE COLUMNS
          `repeat(${children.length}, minmax(100px, 1fr))` // ELSE AUTO CREATE ROWS FOR THE GRID TEMPLATE COLUMNS
        }`,
        padding: `0 ${
          sidePadding ?
          sidePadding : '3vw'
        }`,
        backgroundColor: `${
          backgroundColor ? 
          backgroundColor : 'white'
        }`
      }}
    >
      {children}
    </div>
  )
}