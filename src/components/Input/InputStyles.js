import styled from "styled-components";
import {
  generateInputWidth,
  generateInputPadding,
  generateInputFontSize,
  generateInputLineHeight
} from "./InputStylingService";

const StyledInput = styled.input`
  background-color: #fff;
  border: ;
  border-width: 1px;
  border-radius: 3px;
  border-color: #999;
  border-style: solid;
  display: block;
  font-size: ${(props) => generateInputFontSize(props)};
  line-height: ${(props) => generateInputLineHeight(props)};
  margin-block-end: .67em;
  margin-block-start: .67em;
  width: ${(props) => generateInputWidth(props)};
  padding: ${(props) => generateInputPadding(props)};
  :focus {
    outline: none;
  }
`

export default StyledInput