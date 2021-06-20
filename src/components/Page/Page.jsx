import React from 'react';
import { Section } from '../Section';
import { Column } from '../Column';
import './Page.css'

/**
 * @name Page
 * @description Renders a Page. Use as a wrapper when rendering a new page.
 * @param {*} Props minHeight, verticalPadding, horizontalPadding, children, columns
 * @returns Component
 */
export const Page = ({
  minHeight,
  verticalPadding,
  horizontalPadding,
  children,
  columns
}) => {
  return (
    <div
      className="af-page"
    >
      <Section
        columns={columns}
        horizontalPadding={horizontalPadding ? horizontalPadding : '3vw'}
        minHeight={minHeight ? minHeight : '50vh'}
        verticalPadding={verticalPadding ? verticalPadding : '8vh'}
        verticalAlignment='start'
      >
        <Column>
          {children}
        </Column>
      </Section>
    </div>
  )
}