import React from 'react';
import './Button.css';
import ButtonButton from './ButtonStyles';

/**
 * @name Button
 * @description Renders a button
 * @param {*} param0 children, onClick, size, variant
 * @returns Component
 */
export const Button = ({
  children,
  onClick,
  size,
  variant,
  backgroundColor,
  color
}) => {

  return (
    <ButtonButton
      color={color}
      className="button"
      onClick={onClick}
      variant={variant}
      backgroundColor={backgroundColor}
      size={size}
    >
      {children}
    </ButtonButton>
  )
}
