import React from 'react'
import StyledText from './TextStyles';

/**
 * @name Text
 * @description Renders the text component
 * @param {*} props Props
 * @prop display
 * @prop fontSize
 * @prop global
 * @prop size
 * @returns Component
 */
const Text = (props) => {
  return (
    <StyledText
      {...props}
    >
      {props.children}
    </StyledText>
  )
}

export default Text