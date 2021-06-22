import styled from 'styled-components';
import {
  generateLinkColor,
  generateLinkHoverColor,
  generateLinkFontSize,
  generateLinkFontWeight,
} from './LinkStylingService';

const LinkDiv = styled.div`
  color: ${(props) => generateLinkColor(props.color)};
  font-size: ${(props) => generateLinkFontSize(props.size)};
  font-weight: ${(props) => generateLinkFontWeight(props.weight)};
  &:hover {
    color: ${(props) => generateLinkHoverColor(props.color, props.hoverColor)};
    transition-duration: .3s;
  }
  &:not(:hover) {
    transition-duration: .3s;
  }
`

export default LinkDiv