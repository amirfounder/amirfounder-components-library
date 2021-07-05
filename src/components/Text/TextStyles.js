import styled from "styled-components";
import {
  generateTextColor,
  generateTextDisplay,
  generateTextFontSize
} from "./TextStylingService";

const StyledText = styled.span`
  color: ${(props) => generateTextColor(props)};
  display: ${(props) => generateTextDisplay(props)};
  font-family: ${Constants.PROPS.FONT_FAMILIES.ROBOTO};
  font-size: ${(props) => generateTextFontSize(props)};
`

export default StyledText