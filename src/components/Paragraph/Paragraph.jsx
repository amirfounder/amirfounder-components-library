import React from 'react';
import './Paragraph.css'

/**
 * @name Paragraph
 * @description Renders a paragraph componenet for text
 * @param {*} Props children
 * @returns Component
 */
export const Paragraph = ({
  children,
}) => {
  return (
    <p
      className={`
        paragraph
      `}
    >
      {children}
    </p>
  )
}