import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Link = ({
  children,
  path,
  size,
  weight,
  variant="primary"
}) => {
  <ReactRouterLink
    path={path}
    className={`
      link
      link-variant--${variant}
    `}
    style={{
      fontSize=`${size}`,
      fontWeight=`${weight}`
    }}
  >
    {children}
  </ReactRouterLink>
}
