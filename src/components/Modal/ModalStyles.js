import styled from 'styled-components';
import { handleBackgroundColorStyle } from './ModalService';

const ModalBackgroundDiv = styled.div`
  background-color: ${(props) => handleBackgroundColorStyle(props.backgroundColor)};
`

export default ModalBackgroundDiv