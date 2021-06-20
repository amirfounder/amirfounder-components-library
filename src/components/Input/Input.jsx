import React from 'react';
import './Input.css';
import StyledInput from './InputStyles'

/**
 * @name Input
 * @description Renders Input Component. Recommended to use with the Specific Input componenet
 * @param {*} param0 value, id, onChange, onInput, onKeyDown, type
 * @returns Component
 */
export const Input = ({
  value,
  id,
  onChange,
  onInput,
  onKeyDown,
  type,
  placeholder
}) => {
  return(
    <StyledInput
      className='input'
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      onInput={onInput}
      onKeyDown={onKeyDown}
      type={type}
      value={value}
    />
  )
}