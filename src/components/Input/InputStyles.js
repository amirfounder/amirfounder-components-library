import styled from "styled-components";
import {
  generateInputWidth,
  generateInputPadding,
  generateInputFontSize,
  generateInputLineHeight
} from "./InputStylingService";

const StyledInput = styled.input`
  background-color: #f7f7f7;
  border-width: 0px 0px 1px 0px;
  border-color: #ccc;
  border-style: solid;
  display: block;
  font-size: ${(props) => generateInputFontSize(props.size, props.fontSize)};
  line-height: ${(props) => generateInputLineHeight(props.size, props.lineHeight)};
  margin-block-end: .67em;
  margin-block-start: .67em;
  width: ${(props) => generateInputWidth(props.size, props.width, props.padding)};
  padding: ${(props) => generateInputPadding(props.size, props.padding)};
  :focus {
    outline: none;
  }
`

export default StyledInput