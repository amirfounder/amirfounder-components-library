import React from 'react';
import { useThemeContext } from '../Theme/Theme';
import StyledParagraph from './ParagraphStyles';

/**
 * @name Paragraph
 * @description Renders the paragraph component
 * @param {*} Props children
 * @prop fontSize
 * @prop fontWeight
 * @prop theme
 * @prop lineHeight
 * @prop size
 * @returns Component
 */
export const Paragraph = (props) => {
  const theme = useThemeContext();

  return (
    <StyledParagraph
      className="af-paragraph"
      theme={theme}
      {...props}
    >
      {props.children}
    </StyledParagraph>
  )
}