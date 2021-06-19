import React from 'react';
import './Column.css'
import ColumnDiv from './ColumnStyles';

/**
 * @name Column
 * @description Renders a column.
 * @usage Use to wrap components in a Section
 * @param {*} Props children, alignment
 * @returns Component
 */
export const Column = ({
  children,
  alignment
}) => {
  return(
    <ColumnDiv
      className='column'
      alignment={alignment}
    >
      {children}
    </ColumnDiv>
  )
}