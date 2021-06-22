import React from 'react'
import { Section } from '../Section'
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
        horizontalPadding={props.verticalPadding ? props.verticalPadding : '3vw'}
        verticalAlignment="center"
        {...props}
      >
        {props.children}
      </Section>
    </StyledHeader>
  )
}
