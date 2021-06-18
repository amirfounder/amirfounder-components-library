import React from 'react';
import './Section.css'

export const Section = ({
  columns,
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
          columns ?
          columns :
          children ?
          `repeat(${children && children.length}, minmax(100px, 1fr))` :
          `repeat(${children && children.length}, minmax(100px, 1fr))`
        }`,
        padding: `0 ${sidePadding ? sidePadding : '3vw'}`,
        backgroundColor: `${backgroundColor ? backgroundColor : 'white'}`
      }}
    >
      {children}
    </div>
  )
}