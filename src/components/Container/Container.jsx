import React from 'react';
import './Container.css'
import ContainerDiv from './ContainerStyles';

/**
 * @name Container
 * @description Renders a container component
 * @param {*} Props children
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