import React from 'react';
import './Modal.css'
import ModalBackgroundDiv from './ModalStyles';
import { Container } from '../Container/Container';

/**
 * @name Modal
 * @description Renders a modal.
 * @recommendedChild Container component
 * @param {*} Props children, show
 * @returns Component
 */
export const Modal = (props) => {
  return (
    <div
      className="af-modal"
      hidden={!props.show}
    >
      <ModalBackgroundDiv
        className="af-modal-background"
      >
        <Container
          width={props.width ? props.width.toLowercase() : '40vw'}
          {...props}
        >
          {props.children}
        </Container>
      </ModalBackgroundDiv>
    </div>
  )
}