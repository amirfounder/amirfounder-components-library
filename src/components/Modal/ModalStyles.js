import styled from 'styled-components';
import { handleBackgroundColorStyle } from './ModalStylesService';

const ModalBackgroundDiv = styled.div`
  background-color: ${(props) => handleBackgroundColorStyle(props.backgroundColor)};
`

export default ModalBackgroundDiv