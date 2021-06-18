import React from 'react'
import './Link.css'
import { Link as ReactRouterLink, useHistory, useLocation } from 'react-router-dom'

export const Link = ({
  children,
  to,
  size,
  weight,
  variant
}) => {

  const location = useLocation()

  return (
    <li
      style={{
        listStyleType: 'none',
        display: 'inline'
      }}
    >
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
    </li>
  )
}
