import React from 'react';
import { useThemeContext } from '../Theme/Theme';
import ContainerDiv from './ContainerStyles';

/**
 * @name Container
 * @description Renders the Container component
 * @param {*} props Props
 * @prop backgroundColor
 * @prop theme
 * @prop margin
 * @prop maxHeight
 * @prop maxWidth
 * @prop minHeight
 * @prop minWidth
 * @prop padding
 * @returns Component
 */
export const Container = (props) => {
  const theme = useThemeContext();
  
  return(
    <ContainerDiv
      className='af-container'
      theme={theme}
      {...props}
    >
      {props.children}
    </ContainerDiv>
  )
}