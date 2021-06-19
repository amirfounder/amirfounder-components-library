import React from 'react'
import './Link.css'
// BELOW IMPORTS REQUIRES COMMONJS FORMAT
const { useLocation } = require('react-router-dom')
const { ReactRouterLink } = require('react-router-dom').Link

/**
 * @name Link
 * @requires Parent Requires Browser Router as a componenet
 * @description Renders a React Router Dom Link. Can be used to link to external sites in a new tab
 * @param {*} param0 children, to, size, weight, variant, href
 * @returns Component
 */
export const Link = ({
  children,
  to,
  size,
  weight,
  variant,
  href,
}) => {

  const location = useLocation()

  return (
    <>
      {href ?
        <a
          href={href}
          target='_blank'
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
