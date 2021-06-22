import React from 'react';
import { Section } from '../Section';
import { Column } from '../Column/Column';
import './Page.css'

/**
 * @name Page
 * @description Renders a Page. Use as a wrapper when rendering a new page.
 * @param {*} Props minHeight, verticalPadding, horizontalPadding, children, columns
 * @returns Component
 */
export const Page = (props) => {
  return (
    <div
      className="af-page"
    >
      <Section
        {...props}
        horizontalPadding={props.horizontalPadding ? props.horizontalPadding : '3vw'}
        minHeight={props.minHeight ? props.minHeight : '50vh'}
        verticalPadding={props.verticalPadding ? props.verticalPadding : '8vh'}
        verticalAlignment='start'
      >
        <Column>
          {props.children}
        </Column>
      </Section>
    </div>
  )
}