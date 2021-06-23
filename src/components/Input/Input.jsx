import React from 'react';
import StyledInput from './InputStyles'

/**
 * @name Input
 * @description Renders the Input component
 * @param {*} props Props
 * @returns Component
 */
export const Input = (props) => {
  return(
    <StyledInput
      className='af-input'
      {...props}
    />
  )
}