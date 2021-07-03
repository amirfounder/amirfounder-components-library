import React from 'react'
import { Section } from '../Section/Section'
import StyledHeader from './HeaderStyles'

/**
 * @name Header
 * @description Renders the Header compoennt
 * @param {*} props Props
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
