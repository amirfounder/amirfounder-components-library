import React from 'react';
import StyledButton from './ButtonStyles';

/**
 * @name Button
 * @description Renders a button component
 * @param {*} props Props
 * @returns Component
 */
export const Button = (props) => {

  return (
    <StyledButton
      className="button"
      {...props}
    >
      {props.children}
    </StyledButton>
  )
}
