import React from 'react';
import ContainerDiv from './ContainerStyles';

/**
 * @name Container
 * @description Renders the Container component
 * @param {*} Props Props
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