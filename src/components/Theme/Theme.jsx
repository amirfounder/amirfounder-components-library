import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

/**
 * @name ThemeProvider
 * @description Renders the theme styles context onto the page
 * @param {*} props Props
 * @prop theme
 * @returns Component
 */
const ThemeProvider = ({ theme, ...props }) => {
  return (
    <ThemeContext.Provider
      value={theme}
    >
      {props.children}
    </ThemeContext.Provider>
  )
};

/**
 * @name useThemeContext
 * @description Wrapper for the useContext(ThemeContext) method.
 * @returns Object
 */
const useThemeContext = () => useContext(ThemeContext)

export { ThemeProvider, useThemeContext }