import React from 'react';
import {
  StyledModal,
  StyledModalBackground
} from './ModalStyles';
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
    <StyledModal
      className="af-modal"
      hidden={!props.show}
    >
      <StyledModalBackground
        className="af-modal-background"
      >
        <Container
          width={props.width ? props.width.toLowercase() : '40vw'}
          {...props}
        >
          {props.children}
        </Container>
      </StyledModalBackground>
    </StyledModal>
  )
}