import React from 'react';
import './Modal.css'
import ModalBackgroundDiv from './ModalStyles';
import { Container } from '../Container';

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
  size,
  width,
  height
}) => {
  return (
    <div
      hidden={!show}
      className={`modal`}
    >
      <ModalBackgroundDiv className={'modal-background'}>
        <Container
          size={size}
          width={width ? width : '40vw'}
          height={height}
        >
          {children}
        </Container>
      </ModalBackgroundDiv>
    </div>
  )
}