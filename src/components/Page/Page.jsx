import React from 'react';
import { Section } from '../Section';
import './Page.css'

export const Page = ({
  minHeight,
  verticalPadding,
  sidePadding,
  children,
  columns
}) => {
  return(
    <Section
      minHeight={minHeight ? minHeight : '90vh'}
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