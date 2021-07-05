import React from 'react'
import { Section } from '../Section/Section'
import StyledHeader from './HeaderStyles'

/**
 * @name Header
 * @description Renders the Header compoennt
 * @param {*} props Props
 * @prop backgroundColor
 * @prop global
 * @prop height
 * @prop maxHeight
 * @prop minHeight
 * @prop padding
 * @prop shadow
 * @prop size
 * @returns Component
 */
export const Header = (props) => {
  return(
    <StyledHeader
      className="af-header"
      {...props}
    >
      <Section
        padding={props.padding ? props.padding : '0 3vw'}
        verticalAlignment="center"
        {...props}
      >
        {props.children}
      </Section>
    </StyledHeader>
  )
}
