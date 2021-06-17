import React, { useEffect } from 'react'
import './Header.css'
import { Section } from '../Section'

export const Header = ({
  boxShadow=true,
  children,
  gridTemplateColumns,
  sidePadding="3vw",
  size="medium",
  variant="primary",
  backgroundColor
}) => {

  return(
    <Section
      gridTemplateColumns={gridTemplateColumns}
      sidePadding={sidePadding}
      backgroundColor={backgroundColor}
      className={`
        header-size--${size.toLowerCase()}
        header-variant--${variant.toLowerCase()}
        ${boxShadow ? `header-box-shadow` : null}
      `}
    >
      {children}
    </Section>
  )
}
