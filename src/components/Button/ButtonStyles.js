import styled from "styled-components";
import {
  handleBackgroundColorStyle,
  handleBorderStyle,
  handleColorStyle,
  handlePaddingStyle
} from "./ButtonService";

const ButtonButton = styled.button`
  font-size: ;
  color: ${(props) => handleColorStyle(props.variant, props.backgroundColor, props.color)};
  padding: ${(props) => handlePaddingStyle(props.size)};
  background-color: ${(props) => handleBackgroundColorStyle(props.variant, props.backgroundColor)};
  border: ${(props) => handleBorderStyle(props.backgroundColor)};
  &:hover {
    background-color: ;
  }
`

export default ButtonButton