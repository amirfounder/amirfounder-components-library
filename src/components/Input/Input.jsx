import React from 'react';

import StyledInput from './InputStyles'

/**
 * @name Input
 * @description Renders the Input component
 * @param {*} props Props
 * @prop fontSize
 * @prop theme
 * @prop lineHeight
 * @prop padding
 * @prop size
 * @prop width
 * @returns Component
 */
export const Input = (props) => {
  const theme = useThemeContext();

  return(
    <StyledInput
      className='af-input'
      theme={theme ? theme : null}
      {...props}
    />
  )
}