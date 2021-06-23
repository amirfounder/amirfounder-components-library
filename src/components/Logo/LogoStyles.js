import styled from 'styled-components';
import { Constants } from '../../utils/Constants';
import {
  generateLogoColor,
  generateLogoFontSize
} from './LogoStylingService';

const LogoDiv = styled.div`
  color: ${(props) => generateLogoColor(props.color)};
  font-family: ${Constants.PROPS.FONT_FAMILIES.ROBOTO};
  font-size: ${(props) => generateLogoFontSize(props.size, props.fontSize)};
  font-weight: 300;
  :hover {
    cursor: pointer;
  }
`

export default LogoDiv