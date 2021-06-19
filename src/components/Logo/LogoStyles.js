import styled from 'styled-components';
import { handleSizeProp } from './LogoService';

const LogoDiv = styled.div`
  font-size: ${(props) => handleSizeProp(props.size)}
`

export default LogoDiv