import React from 'react';
import { Section } from '../Section/Section';
import { Column } from '../Column/Column';
import StyledPage from './PageStyles';

/**
 * @name Page
 * @description Renders the Page component
 * @param {*} props Props
 * @returns Component
 */
export const Page = (props) => {
  return (
    <StyledPage
      className="af-page"
    >
      <Section
        {...props}
        minHeight={props.minHeight ? props.minHeight : '50vh'}
        padding={props.paddings ? props.padding : '8vh 3vw'}
        verticalAlignment='start'
      >
        {props.children}
      </Section>
    </StyledPage>
  )
}