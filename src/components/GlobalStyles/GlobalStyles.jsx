import React, { createContext, useContext } from 'react';

const GlobalStylesContext = createContext();

const GlobalStylesProvider = ({ globalStyles, ...props }) => {
  return (
    <GlobalStylesContext.Provider
      value={globalStyles}
    >
      {props.children}
    </GlobalStylesContext.Provider>
  )
};

const useGlobalStylesContext = () => useContext(GlobalStylesContext)

export { GlobalStylesProvider, useGlobalStylesContext }