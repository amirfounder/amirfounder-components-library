import React from 'react';
import './Modal.css'

export const Modal = ({
  children,
  show,
  verticalPadding,
  horizontalPadding
}) => {
  return(
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