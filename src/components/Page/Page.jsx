import React from 'react';
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
      {...props}
    >
      {props.children}
    </StyledPage>
  )
}