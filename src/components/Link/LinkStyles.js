import styled from 'styled-components';
import { Constants } from '../../utils/Constants';
import {
  generateLinkColor,
  generateLinkHoverColor,
  generateLinkFontSize,
  generateLinkFontWeight,
} from './LinkStylingService';

const StyledLink = styled.div`
  color: ${(props) => generateLinkColor(props)};
  display: inline;
  font-family: ${Constants.PROPS.FONT_FAMILIES.ROBOTO};
  font-size: ${(props) => generateLinkFontSize(props)};
  font-weight: ${(props) => generateLinkFontWeight(props)};
  &:hover {
    color: ${(props) => generateLinkHoverColor(props)};
    cursor: pointer;
    transition-duration: .3s;
  }
  &:not(:hover) {
    transition-duration: .3s;
  }
`

export default StyledLink