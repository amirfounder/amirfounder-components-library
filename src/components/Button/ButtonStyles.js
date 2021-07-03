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
  background-color: ${(props) => generateButtonBackgroundColor(props)};
  border-color: ${(props) => generateButtonBorderColor(props)};
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  color: ${(props) => generateButtonColor(props)};
  font-size: ${(props) => generateButtonFontSize(props)};
  padding: ${(props) => generateButtonPadding(props)};
  :hover {
    background-color: ${(props) => generateButtonHoverBackgroundColor(props)};
    border-color: ${(props) => generateButtonHoverBorderColor(props)};
    color: ${(props) => generateButtonHoverColor(props)};
    cursor: pointer;
    transition-duration: .3s;
  }
  :not(:hover) {
    transition-duration: .3s;
  }
  
`

export default StyledButton