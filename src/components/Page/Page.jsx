import React from 'react';
import { Section } from '../Section';
import './Page.css'

/**
 * @name Page
 * @description Renders a Page. Use as a wrapper when rendering a new page.
 * @param {*} Props minHeight, verticalPadding, sidePadding, children, columns
 * @returns Component
 */
export const Page = ({
  minHeight,
  verticalPadding,
  sidePadding,
  children,
  columns
}) => {
  return (
    <Section
      minHeight={minHeight ? minHeight : '50vh'}
      verticalPadding={verticalPadding ? verticalPadding : '8vh'}
      sidePadding={sidePadding ? sidePadding : '3vw'}
      verticalAlign='start'
      columns={columns ? columns : '1fr'}
    >
      <div>
        {children}
      </div>
    </Section>
  )
}