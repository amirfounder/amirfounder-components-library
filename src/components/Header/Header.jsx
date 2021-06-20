import React from 'react'
import './Header.css'
import { Section } from '../Section'
import HeaderDiv from './HeaderStyles'

/**
 * @name Header
 * @description Renders a Header
 * @implements Section component
 * @param {*} param0 shadow, children, columns, verticalPadding, size, variant, backgroundColor
 * @returns Component
 */
export const Header = ({
  shadow,
  children,
  columns,
  verticalPadding,
  size,
  backgroundColor
}) => {
  return(
    <HeaderDiv
      backgroundColor={backgroundColor}
      className="af-header"
      shadow={shadow}
      size={size}
    >
      <Section
        backgroundColor={backgroundColor}
        columns={columns}
        horizontalPadding={verticalPadding ? verticalPadding : '3vw'}
        verticalAlignment="center"
      >
        {children}
      </Section>
    </HeaderDiv>
  )
}
