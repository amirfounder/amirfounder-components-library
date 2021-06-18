import React from 'react';
import './Section.css'

export const Section = ({
  columns,
  children,
  className,
  sidePadding,
  backgroundColor,
  verticalPadding,
  minHeight,
  verticalAlign
}) => {
  return (
    <div
      className={`
        section
        ${className}
      `}
      style={{
        gridTemplateColumns: `${columns ?
            columns :
            children ?
              `repeat(${children && children.length}, minmax(100px, 1fr))` :
              `repeat(${children && children.length}, minmax(100px, 1fr))`
          }`,
        alignItems: `${verticalAlign ? verticalAlign : 'center'}`,
        minHeight: `${minHeight ? minHeight : '0vh'}`,
        padding: `${verticalPadding ? verticalPadding.toLowerCase() :'0'} ${sidePadding ? sidePadding.toLowerCase() : '3vw'}`,
        backgroundColor: `${backgroundColor && backgroundColor}`
      }}
    >
      {children}
    </div>
  )
}