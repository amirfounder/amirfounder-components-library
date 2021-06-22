import styled from 'styled-components';
import { generateBackgroundColorStyle } from './ModalStylingService';

const ModalBackgroundDiv = styled.div`
  background-color: ${(props) => generateBackgroundColorStyle(props.backgroundColor)};
`

export default ModalBackgroundDiv