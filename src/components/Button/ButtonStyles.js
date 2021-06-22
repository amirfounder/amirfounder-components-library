import styled from "styled-components";
import {
  generateButtonBorder,
  generateButtonFontSize,
  generateButtonPadding,
  generateButtonBorderColor,
  generateBackgroundColorStyle,
  handleColorStyle,
  handleHoverBackgroundColorStyle,
  handleHoverBorderColorStyle,
  handleHoverColorStyle,
} from "./ButtonStylingService";

const StyledButton = styled.button`
  background-color: ${(props) => generateBackgroundColorStyle(props.variant,props.backgroundColor)};
  border: ${(props) => generateButtonBorder(props.backgroundColor)};
  border-color: ${(props) => generateButtonBorderColor(props.backgroundColor, props.borderColor)};
  border-radius: 3px;
  color: ${(props) => handleColorStyle(props.variant, props.backgroundColor,props.color)};
  font-size: ${(props) => generateButtonFontSize(props.size, props.fontSize)};
  padding: ${(props) => generateButtonPadding(props.size, props.padding)};
  :hover {
    background-color: ${(props) => handleHoverBackgroundColorStyle(props.variant, props.backgroundHoverColor)};
    border: ${(props) => handleHoverBorderColorStyle(props.variant, props.backgroundColor, props.borderhoverColor)};
    color: ${(props) => handleHoverColorStyle(props.variant, props.hoverColor)};
    transition-duration: .3s;
    cursor: pointer;
  }
  :not(:hover) {
    transition-duration: .3s;
  }
  
`

export default StyledButton