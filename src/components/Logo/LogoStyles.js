import styled from 'styled-components';
import { Constants } from '../../utils/Constants';
import {
  generateLogoColor,
  generateLogoFontSize
} from './LogoStylingService';

const LogoDiv = styled.div`
  color: ${(props) => generateLogoColor(props)};
  font-family: ${Constants.PROPS.FONT_FAMILIES.ROBOTO};
  font-size: ${(props) => generateLogoFontSize(props)};
  font-weight: 300;
  :hover {
    cursor: pointer;
  }
`

export default LogoDiv