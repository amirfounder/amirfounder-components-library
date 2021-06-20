import styled from "styled-components";
import { generateInputWidth } from "./InputStylesService";

const StyledInput = styled.input`
  width: ${(props) => generateInputWidth(props.size, props.width, props.padding)}
  padding: ${(props) => generateInputPadding(props.size, props.padding)}
`

export default StyledInput