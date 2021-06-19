import styled from 'styled-components';
import { handleSizeStyle } from './LogoService';

const LogoDiv = styled.div`
  font-size: ${(props) => handleSizeStyle(props.size)}
`

export default LogoDiv