import React from 'react';
import { useThemeContext } from '../Theme/Theme';
import StyledColumn from './ColumnStyles';

/**
 * @name Column
 * @description Renders the Column Component
 * @param {*} props Props
 * @prop alignment
 * @prop theme
 * @returns Component
 */
export const Column = (props) => {
  const theme = useThemeContext();

  return (
    <StyledColumn
      className='af-column'
      theme={theme ? theme : null}
      {...props}
    >
      {props.children}
    </StyledColumn>
  )
}