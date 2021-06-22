import styled from 'styled-components';
import { generateLogoColor, handleSizeStyle } from './LogoStylingService';

const LogoDiv = styled.div`
  font-size: ${(props) => handleSizeStyle(props.size)};
  color: ${(props) => generateLogoColor(props.color)};
`

export default LogoDiv