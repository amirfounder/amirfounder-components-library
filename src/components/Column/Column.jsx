import React from 'react';
import ColumnDiv from './ColumnStyles';

/**
 * @name Column
 * @description Renders the Column Component
 * @param {*} props Props
 * @prop alignment
 * @prop global
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