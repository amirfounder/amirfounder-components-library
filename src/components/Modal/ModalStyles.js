import styled from 'styled-components';
import { generateModalBackground } from './ModalStylingService';

export const StyledModal = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
`

export const StyledModalBackground = styled.div`
  background-color: ${(props) => generateModalBackground(props)};
  width: 100vw;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
`