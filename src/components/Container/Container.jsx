import React from 'react';
import ContainerDiv from './ContainerStyles';

/**
 * @name Container
 * @description Renders the Container component
 * @param {*} props Props
 * @prop backgroundColor
 * @prop global
 * @prop margin
 * @prop maxHeight
 * @prop maxWidth
 * @prop minHeight
 * @prop minWidth
 * @prop padding
 * @returns Component
 */
export const Container = (props) => {
  return(
    <ContainerDiv
      className='af-container'
      {...props}
    >
      {props.children}
    </ContainerDiv>
  )
}