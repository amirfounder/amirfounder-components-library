import React from 'react';
import { useGlobalStylesContext } from '../GlobalStyles/GlobalStyles';
import StyledButton from './ButtonStyles';
import PropTypes from 'prop-types';

/**
 * Renders the Button component
 * @param {*} Props
 * @prop backgroundColor - 'background-color' css property
 * @prop borderColor - 'border-color' css property
 * @prop color - 'color' css property
 * @prop hoverBorderColor - 'border-color' css property for :hover selector
 * @prop hoverBackgroundColor - 'background-color' css property for :hover selector
 * @prop hoverColor - 'color' css property for :hover selector
 * @prop fontSize - 'font-size' css property
 * @prop global - global property : pass the globalStyles object
 * @prop padding - 'padding' css property
 * @prop size - abstract prop for size
 * @prop variant - abstract prop for border, background, 
 * @returns Component
 */
export const Button = (props) => {

  const globalStyles = useGlobalStylesContext();

  return (
    <StyledButton
      className="af-button"
      global={globalStyles}
      {...props}
    >
      {props.children}
    </StyledButton>
  )
}

Button.prototype = {
  global: PropTypes.object,
  variant: PropTypes.oneOf([
    'outline',
    'filled'
  ]),
}
