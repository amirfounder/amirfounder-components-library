import React from 'react'
import './Header.css'

export const Header = ({
  boxShadow=true,
  children,
  gridTemplateColumns="1fr 1fr",
  sidePadding="3vw",
  size="medium",
  variant="primary",
  backgroundColor
}) => {
  return(
    <header
      className={`
        header-size--${size.toLowerCase()}
        header-variant--${variant.toLowerCase()}
        ${boxShadow ? `header-box-shadow` : null}
      `}
      style={{
        padding: `0 ${sidePadding}`,
        gridTemplateColumns: `${gridTemplateColumns}`,
        backgroundColor: `${backgroundColor ? backgroundColor : 'inherit'}`
      }}
    >
      {children}
    </header>
  )
}
