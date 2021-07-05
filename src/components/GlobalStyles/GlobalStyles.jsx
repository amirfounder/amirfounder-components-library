import React, { createContext, useContext } from 'react';

const GlobalStylesContext = createContext();

/**
 * @name GlobalStylesProvider
 * @description Renders the global styles context onto the page
 * @param {*} props Props
 * @prop globalStyles
 * @returns Component
 */
const GlobalStylesProvider = ({ globalStyles, ...props }) => {
  return (
    <GlobalStylesContext.Provider
      value={globalStyles}
    >
      {props.children}
    </GlobalStylesContext.Provider>
  )
};

/**
 * @name useGlobalStylesContext
 * @description Wrapper for the useContext(GlobalStylesContext) method.
 * @returns Object
 */
const useGlobalStylesContext = () => useContext(GlobalStylesContext)

export { GlobalStylesProvider, useGlobalStylesContext }