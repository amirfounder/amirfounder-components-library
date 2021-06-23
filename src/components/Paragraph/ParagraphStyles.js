import styled from "styled-components";
import { Constants } from "../../utils/Constants";
import {
  generateParagraphFontSize,
  generateParagraphFontWeight,
  generateParagraphLineHeight
} from "./ParagraphStylingService";

const StyledParagraph = styled.p`
  font-family: ${Constants.PROPS.FONT_FAMILIES.ROBOTO};
  font-size: ${(props) => generateParagraphFontSize(props.size, props.fontSize)};
  font-weight: ${(props) => generateParagraphFontWeight(props.fontWeight)};
  line-height: ${(props) => generateParagraphLineHeight(props.lineHeight)};
  margin-block-end: 2rem;
`

export default StyledParagraph