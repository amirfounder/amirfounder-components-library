import React from 'react';
import './Button.css';
import StyledButton from './ButtonStyles';

/**
 * @name Button
 * @description Renders a button onto the HTML page
 * @property {String} backgroundColor Background color of button
 * @property {String} backgroundHoverColor Backgrund color of button when hovered
 * @property {String} borderHoverColor Border color of button when hovered
 * @property {*} children HTML to pass as children to the button
 * @property {String} color Color of button text
 * @property {String} hoverColor Color of button text when hovered
 * @property {Function} onClick Function to call on click
 * @property {String} size Size of the button. ['small', 'medium', 'large']
 * @property {String} variant Variant of the button ['filled', 'outline']
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
