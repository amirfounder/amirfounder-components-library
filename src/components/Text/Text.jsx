import React from 'react'
import { useThemeContext } from '../Theme/Theme';
import StyledText from './TextStyles';

/**
 * @name Text
 * @description Renders the text component
 * @param {*} props Props
 * @prop display
 * @prop fontSize
 * @prop theme
 * @prop size
 * @returns Component
 */
const Text = (props) => {
  const theme = useThemeContext();
  return (
    <StyledText
      theme={theme ? theme : null}
      {...props}
    >
      {props.children}
    </StyledText>
  )
}

export default Text