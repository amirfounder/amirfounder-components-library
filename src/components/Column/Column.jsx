import React from 'react';
import { useThemeContext } from '../Theme/Theme';
import ColumnDiv from './ColumnStyles';

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
    <ColumnDiv
      className='af-column'
      theme={theme}
      {...props}
    >
      {props.children}
    </ColumnDiv>
  )
}