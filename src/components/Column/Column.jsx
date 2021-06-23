import React from 'react';
import ColumnDiv from './ColumnStyles';

/**
 * @name Column
 * @description Renders the Column Component
 * @param {*} props Props
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