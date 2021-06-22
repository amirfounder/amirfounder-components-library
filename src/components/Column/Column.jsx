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
export const Column = (props) => {
  return(
    <ColumnDiv
      className='af-column'
      {...props}
    >
      {props.children}
    </ColumnDiv>
  )
}