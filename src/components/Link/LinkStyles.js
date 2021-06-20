import styled from 'styled-components';
import { handleColorStyle, handleHoverColorStyle, handleSizeStyle, handleFontWeightStyle } from './LinkService';

const LinkDiv = styled.div`
  color: ${(props) => handleColorStyle(props.color)};
  font-size: ${(props) => handleSizeStyle(props.size)};
  font-weight: ${(props) => handleFontWeightStyle(props.weight)};
  &:hover {
    color: ${(props) => handleHoverColorStyle(props.color, props.hoverColor)};
    transition-duration: .3s;
  }
  &:not(:hover) {
    color: ${(props) => handleColorStyle(props.color)};
    transition-duration: .3s;
  }
`

export default LinkDiv