import React from 'react';
import { useGlobalStylesContext } from '../GlobalStyles/GlobalStyles';
import StyledButton from './ButtonStyles';

/**
 * @name Button
 * @description Renders the Button component
 * @param {*} props Props
 * @returns Component
 */
export const Button = (props) => {

  const globalStyles = useGlobalStylesContext();
  
  return (
    <StyledButton
      className="button"
      global={globalStyles}
      {...props}
    >
      {props.children}
    </StyledButton>
  )
}
