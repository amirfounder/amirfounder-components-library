import React from 'react';
import { useThemeContext } from '../Theme/Theme';
import StyledPage from './PageStyles';

/**
 * @name Page
 * @description Renders the Page component
 * @param {*} props Props
 * @prop backgroundColor
 * @prop theme
 * @returns Component
 */
export const Page = (props) => {
  const theme = useThemeContext();

  return (
    <StyledPage
      className="af-page"
      theme={theme ? theme : null}
      {...props}
    >
      {props.children}
    </StyledPage>
  )
}