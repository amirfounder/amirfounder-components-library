import React from 'react';
import './Container.css'
import ContainerDiv from './ContainerStyles';

/**
 * @name Container
 * @description Renders a container component
 * @param {*} Props children
 * @returns Component
 */
export const Container = ({
  children,
  backgroundColor,
  size,
  width,
  height
}) => {
  return(
    <ContainerDiv
      size={size}
      backgroundColor={backgroundColor}
      className='container'
      width={width}
      height={height}
    >
      {children}
    </ContainerDiv>
  )
}