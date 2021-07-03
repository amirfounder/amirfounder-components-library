import styled from "styled-components";
import {
  generateButtonBorderColor,
  generateButtonBackgroundColor,
  generateButtonColor,
  generateButtonFontSize,
  generateButtonHoverBackgroundColor,
  generateButtonHoverBorderColor,
  generateButtonHoverColor,
  generateButtonPadding,
} from "./ButtonStylingService";

/**
 * Styling for the Button Component
 */
const StyledButton = styled.button`
  background-color: ${(props) => generateButtonBackgroundColor(props.variant, props.backgroundColor, props.global)};
  border-color: ${(props) => generateButtonBorderColor(props.backgroundColor, props.borderColor, props.global)};
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  color: ${(props) => generateButtonColor(props.variant, props.color, props.global)};
  font-size: ${(props) => generateButtonFontSize(props.size, props.fontSize, props.global)};
  padding: ${(props) => generateButtonPadding(props.size, props.padding, props.global)};
  :hover {
    background-color: ${(props) => generateButtonHoverBackgroundColor(props.variant, props.hoverBackgroundColor, props.global)};
    border-color: ${(props) => generateButtonHoverBorderColor(props.variant, props.hoverBackgroundColor, props.hoverBorderColor, props.global)};
    color: ${(props) => generateButtonHoverColor(props.hoverColor, props.global)};
    cursor: pointer;
    transition-duration: .3s;
  }
  :not(:hover) {
    transition-duration: .3s;
  }
  
`

export default StyledButton