import React from 'react'
import './Link.css'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Link = ({
  children,
  path,
  size,
  weight,
  variant = "primary"
}) => {
  return (
    <li
      style={{
        listStyleType: 'none',
        display: 'inline'
      }}
    >
      <ReactRouterLink
        to={path}
        className={`link link-variant--${variant}`}
        style={{
          fontSize: `${size ? size : '16px'}`,
          fontWeight: `${weight ? weight : 300}`,
        }}
      >
        {children}
      </ReactRouterLink>
    </li>
  )
}
