import styled from "styled-components";
import {
  generateHeaderBackgroundColor,
  generateHeaderBoxShadow,
  generateHeaderHeight,
  generateHeaderMaxHeight,
  generateHeaderMinHeight
} from "./HeaderStylingService";

const StyledHeader = styled.div`
  align-items: center;
  display: grid;
  background-color: ${(props) => generateHeaderBackgroundColor(props.backgroundColor)};
  box-shadow: ${(props) => generateHeaderBoxShadow(props.shadow)};
  height: ${(props) => generateHeaderHeight(props.size, props.height)};
  max-height: ${(props) => generateHeaderMaxHeight(props.size, props.maxHeight)};
  min-height: ${(props) => generateHeaderMinHeight(props.size, props.minHeight)};
`

export default StyledHeader