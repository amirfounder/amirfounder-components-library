import React from 'react';
import './Column.css'

/**
 * @name Column
 * @description Renders a column.
 * @usage Use to wrap components in a Section
 * @param {*} param0 children, alignment
 * @returns Component
 */
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