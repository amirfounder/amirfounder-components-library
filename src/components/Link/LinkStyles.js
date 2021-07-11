import styled from 'styled-components';
import { Constants } from '../../utils/Constants';
import {
  generateLinkColor,
  generateLinkHoverColor,
  generateLinkFontSize,
  generateLinkFontWeight,
  generateLinkBackgroundColor,
  generateLinkHoverBackgroundColor,
  generateLinkPadding,
} from './LinkStylingService';

const StyledLink = styled.div`
  background-color: ${(props) => generateLinkBackgroundColor(props)};
  color: ${(props) => generateLinkColor(props)};
  display: inline-block;
  font-family: ${Constants.PROPS.FONT_FAMILIES.ROBOTO};
  font-size: ${(props) => generateLinkFontSize(props)};
  font-weight: ${(props) => generateLinkFontWeight(props)};
  padding: ${(props) => generateLinkPadding(props)};
  :hover {
    color: ${(props) => generateLinkHoverColor(props)};
    background-color: ${(props) => generateLinkHoverBackgroundColor(props)};
    cursor: pointer;
    transition-duration: .3s;
  }
  :not(:hover) {
    transition-duration: .3s;
  }
`

export default StyledLink