import styled from "styled-components";
import {
  generateButtonBorder,
  generateButtonFontSize,
  generateButtonPadding,
  generateBackgroundColorStyle,
  handleColorStyle,
  handleHoverBackgroundColorStyle,
  handleHoverBorderColorStyle,
  handleHoverColorStyle,
} from "./ButtonStylingService";

const StyledButton = styled.button`
  background-color: ${(props) => generateBackgroundColorStyle(props.variant,props.backgroundColor)};
  border: ${(props) => generateButtonBorder(props.backgroundColor)};
  color: ${(props) => handleColorStyle(props.variant, props.backgroundColor,props.color)};
  font-size: ${(props) => generateButtonFontSize(props.size)};
  padding: ${(props) => generateButtonPadding(props.size)};
  :hover {
    background-color: ${(props) => handleHoverBackgroundColorStyle(props.variant, props.backgroundHoverColor)};
    border: ${(props) => handleHoverBorderColorStyle(props.variant, props.backgroundColor, props.borderhoverColor)};
    color: ${(props) => handleHoverColorStyle(props.variant, props.hoverColor)};
    transition-duration: .3s;
  }
  :not(:hover) {
    background-color: ${(props) => generateBackgroundColorStyle(props.variant, props.backgroundColor)};
    border: ${(props) => generateButtonBorder(props.backgroundColor)};
    color: ${(props) => handleColorStyle(props.variant, props.backgroundColor, props.color)};
    transition-duration: .3s;
  }
  
`

export default StyledButton