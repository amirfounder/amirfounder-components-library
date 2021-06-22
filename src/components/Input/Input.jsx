import React from 'react';
import './Input.css';
import StyledInput from './InputStyles'

/**
 * @name Input
 * @description Renders Input Component. Recommended to use with the Specific Input componenet
 * @param {*} param0 value, id, onChange, onInput, onKeyDown, type
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