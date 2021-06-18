import React from 'react'
import './Link.css'
import { Link as ReactRouterLink, useLocation } from 'react-router-dom'

export const Link = ({
  children,
  to,
  size,
  weight,
  variant,
  href
}) => {

  const location = useLocation()

  return (
    <>
    {href ?
      <a
        href={href}
        className={`
          link
          link-variant--${variant ? variant.toLowerCase() : 'primary'}
        `}
        style={{
          fontSize: `${size ? size.toLowerCase() : '16px'}`,
          fontWeight: `${weight ? weight : 300}`,
        }}
      >
        {children}
      </a>
      :
      <ReactRouterLink
        to={to ? to : location.pathname}
        className={`
          link
          link-variant--${variant ? variant.toLowerCase() : 'primary'}
        `}
        style={{
          fontSize: `${size ? size.toLowerCase() : '16px'}`,
          fontWeight: `${weight ? weight : 300}`,
        }}
      >
        {children}
      </ReactRouterLink>
    }
    </>
  )
}
