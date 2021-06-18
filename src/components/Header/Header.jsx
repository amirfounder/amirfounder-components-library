import React from 'react'
import './Header.css'
import { Section } from '../Section'

/**
 * @name Header
 * @description Renders a Header
 * @implements Section component
 * @param {*} param0 shadow, children, columns, sidePadding, size, variant, backgroundColor
 * @returns Component
 */
export const Header = ({
  shadow,
  children,
  columns,
  sidePadding,
  size,
  variant,
  backgroundColor
}) => {

  return(
    <Section
      columns={columns}
      sidePadding={
        sidePadding ?
        sidePadding.toLowerCase() : '3vw'
      }
      backgroundColor={backgroundColor}
      className={`
        header
        header-size--${size ? size.toLowerCase() : 'medium'}
        header-variant--${variant ? variant.toLowerCase() : 'primary'}
        ${shadow ? `header-box-shadow` : null}
      `}
    >
      {children}
    </Section>
  )
}
