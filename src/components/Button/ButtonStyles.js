import styled from "styled-components";
import {
  generateButtonBorderColor as generateBorderColor,
  generateButtonBackgroundColor as generateBackgroundColor,
  generateButtonColor as generateColor,
  generateButtonFontSize as generateFontSize,
  generateButtonHoverBackgroundColor as generateHoverBackgroundColor,
  generateButtonHoverBorderColor as generateHoverBorderColor,
  generateButtonHoverColor as generateHoverColor,
  generateButtonPadding as generatePadding,
} from "./ButtonStylingService";

/**
 * Styling for the Button Component
 */
const StyledButton = styled.button`
  background-color: ${(props) => generateBackgroundColor(props)};
  border-color: ${(props) => generateBorderColor(props)};
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  color: ${(props) => generateColor(props)};
  font-size: ${(props) => generateFontSize(props)};
  padding: ${(props) => generatePadding(props)};
  :hover {
    background-color: ${(props) => generateHoverBackgroundColor(props)};
    border-color: ${(props) => generateHoverBorderColor(props)};
    color: ${(props) => generateHoverColor(props)};
    cursor: pointer;
    transition-duration: .3s;
  }
  :not(:hover) {
    transition-duration: .3s;
  }
  
`

export default StyledButton