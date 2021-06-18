import React from 'react';
import './Modal.css'

/**
 * @name Modal
 * @description Renders a modal.
 * @recommendedChild Container component
 * @param {*} Props children, show
 * @returns Component
 */
export const Modal = ({
  children,
  show,
}) => {
  return (
    <div
      hidden={!show}
      className={`modal`}
    >
      <div className={'modal-background'}>
        {children}
      </div>
    </div>
  )
}