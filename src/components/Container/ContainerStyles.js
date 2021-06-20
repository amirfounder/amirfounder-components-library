import styled from "styled-components";
import {
  handleBackgroundColorStyle,
  handleHeightStyle,
  handleSizeStyle,
  handleWidthStyle
} from "../Container/ContainerService";

const ContainerDiv = styled.div`
  background-color: ${(props) => handleBackgroundColorStyle(props.backgroundColor)};
  padding: ${(props) => handleSizeStyle(props.size)};
  max-width: ${(props) => handleWidthStyle(props.width)};
  min-width: ${(props) => handleWidthStyle(props.width)};
  min-height: ${(props) => handleHeightStyle(props.height)};
`

export default ContainerDiv