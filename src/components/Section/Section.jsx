import React from 'react';
import './Section.css'

/**
 * @name Section
 * @description Redners a section that allows multiple columns. Recommended to use column componenet as children wrapper.
 * @param {*} Props children, columns, className, sidePadding, backgroundColor, verticalPadding, minHeight, verticalAlign
 * @returns Component
 */
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
            `repeat(${children && children.length}, 1fr)` :
            `repeat(${children && children.length}, 1fr)`
          }`,
        alignItems: `${verticalAlign ? verticalAlign : 'center'}`,
        minHeight: `${minHeight ? minHeight : '0vh'}`,
        padding: `${verticalPadding ? verticalPadding.toLowerCase() : '0'} ${sidePadding ? sidePadding.toLowerCase() : '0vw'}`,
        backgroundColor: `${backgroundColor && backgroundColor}`
      }}
    >
      {children}
    </div>
  )
}