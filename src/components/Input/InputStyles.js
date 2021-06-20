import styled from "styled-components";
import {
  generateInputWidth,
  generateInputPadding,
  generateInputFontSize,
  generateInputLineHeight
} from "./InputStylesService";

const StyledInput = styled.input`
  width: ${(props) => generateInputWidth(props.size, props.width, props.padding)};
  padding: ${(props) => generateInputPadding(props.size, props.padding)};
  font-size: ${(props) => generateInputFontSize(props.size, props.fontSize)};
  line-height: ${(props) => generateInputLineHeight(props.size, props.lineHeight)};
`

export default StyledInput