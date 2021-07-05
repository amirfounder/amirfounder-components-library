import React from 'react';
import {
  StyledModal,
  StyledModalBackground
} from './ModalStyles';
import { Container } from '../Container/Container';

/**
 * @name Modal
 * @description Renders a modal.
 * @param {*} props Props
 * @prop alignItems
 * @prop backgroundColor
 * @prop global
 * @prop justifyContent
 * @returns Component
 */
export const Modal = (props) => {
  return (
    <StyledModal
      className="af-modal"
      hidden={!props.show}
      {...props}
    >
      <StyledModalBackground
        className="af-modal-background"
        {...props}
      >
        <Container
          minWidth={props.width ? props.width.toLowercase() : '40vw'}
          maxWidth={props.width ? props.width.toLowercase() : '40vw'}
          margin={props.margin ? props.margin.toLowercase() : '20px'}
          {...props}
        >
          {props.children}
        </Container>
      </StyledModalBackground>
    </StyledModal>
  )
}