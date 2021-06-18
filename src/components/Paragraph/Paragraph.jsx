import React from 'react';
import './Paragraph.css'

export const Paragraph = ({
  children,
  variant
}) => {
  return (
    <p
      className={`
        paragraph
        paragraph-variant--${variant && variant.toLowerCase()}
      `}
    >
      {children}
    </p>
  )
}