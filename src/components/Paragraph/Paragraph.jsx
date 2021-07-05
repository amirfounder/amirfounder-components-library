import React from 'react';
import StyledParagraph from './ParagraphStyles';

/**
 * @name Paragraph
 * @description Renders the paragraph component
 * @param {*} Props children
 * @prop fontSize
 * @prop fontWeight
 * @prop global
 * @prop lineHeight
 * @prop size
 * @returns Component
 */
export const Paragraph = (props) => {
  return (
    <StyledParagraph
      className="af-paragraph"
      {...props}
    >
      {props.children}
    </StyledParagraph>
  )
}