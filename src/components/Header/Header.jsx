import React from 'react'
import { Section } from '../Section/Section'
import { useThemeContext } from '../Theme/Theme'
import StyledHeader from './HeaderStyles'

/**
 * @name Header
 * @description Renders the Header compoennt
 * @param {*} props Props
 * @prop backgroundColor
 * @prop theme
 * @prop height
 * @prop maxHeight
 * @prop minHeight
 * @prop padding
 * @prop shadow
 * @prop size
 * @returns Component
 */
export const Header = (props) => {
  const theme = useThemeContext();

  return (
    <StyledHeader
      className="af-header"
      theme={theme}
      {...props}
    >
      <Section
        padding={props.padding ? props.padding : '0 3vw'}
        theme={theme}
        verticalAlignment="center"
        {...props}
      >
        {props.children}
      </Section>
    </StyledHeader>
  )
}
