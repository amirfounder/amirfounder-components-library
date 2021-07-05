import styled from "styled-components";
import {
  generateTextColor,
  generateTextFontSize
} from "./TextStylingService";

const StyledText = styled.span`
  font-family: ${Constants.PROPS.FONT_FAMILIES.ROBOTO};
  color: ${(props) => generateTextColor(props)};
  font-size: ${(props) => generateTextFontSize(props)};
`

export default StyledText