import styled from "styled-components";
import {
  handleBackgroundColorStyle,
  handleBoxShadowStyle,
  handleHeightStyle,
  handleMinHeightStyle
} from "./HeaderService";

const HeaderDiv = styled.div`
  background-color: ${(props) => handleBackgroundColorStyle(props.backgroundColor)};
  box-shadow: ${(props) => handleBoxShadowStyle(props.shadow)};
  min-height: ${(props) => handleMinHeightStyle(props.size)};
  height: ${(props) => handleHeightStyle(props.size)};
`

export default HeaderDiv