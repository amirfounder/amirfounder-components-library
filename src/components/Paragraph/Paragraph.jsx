import React from 'react';
import StyledParagraph from './ParagraphStyles';

/**
 * @name Paragraph
 * @description Renders a paragraph componenet for text
 * @param {*} Props children
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