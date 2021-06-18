import React from 'react';
import './Container.css'

/**
 * @name Container
 * @description Renders a container component
 * @param {*} Props children
 * @returns Component
 */
export const Container = ({
  children
}) => {
  return(
    <div
      className={`
        container
      `}
    >
      {children}
    </div>
  )
}