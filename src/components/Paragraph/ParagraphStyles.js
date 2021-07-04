import styled from "styled-components";
import { Constants } from "../../utils/Constants";
import {
  generateParagraphFontSize,
  generateParagraphFontWeight,
  generateParagraphLineHeight
} from "./ParagraphStylingService";

const StyledParagraph = styled.p`
  font-family: ${Constants.PROPS.FONT_FAMILIES.ROBOTO};
  font-size: ${(props) => generateParagraphFontSize(props)};
  font-weight: ${(props) => generateParagraphFontWeight(props)};
  line-height: ${(props) => generateParagraphLineHeight(props)};
  margin-block-end: 2rem;
`

export default StyledParagraph