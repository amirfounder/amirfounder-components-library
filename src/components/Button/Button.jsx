import React from 'react';
import { useThemeContext } from '../Theme/Theme';
import StyledButton from './ButtonStyles';
import PropTypes from 'prop-types';

/**
 * @nmae Button
 * @description Renders the Button component
 * @param {*} props Props
 * @prop backgroundColor - 'background-color' css property
 * @prop borderColor - 'border-color' css property
 * @prop color - 'color' css property
 * @prop hoverBorderColor - 'border-color' css property for :hover selector
 * @prop hoverBackgroundColor - 'background-color' css property for :hover selector
 * @prop hoverColor - 'color' css property for :hover selector
 * @prop fontSize - 'font-size' css property
 * @prop theme - theme property : pass the theme object
 * @prop padding - 'padding' css property
 * @prop size - abstract prop for size
 * @prop variant - abstract prop for border, background, 
 * @returns Component
 */
export const Button = (props) => {
  const theme = useThemeContext();

  return (
    <StyledButton
      className="af-button"
      theme={theme}
      {...props}
    >
      {props.children}
    </StyledButton>
  )
}

Button.prototype = {
  theme: PropTypes.object,
  variant: PropTypes.oneOf([
    'outline',
    'filled'
  ]),
}
