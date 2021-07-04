import styled from "styled-components";
import {
  generateHeaderBackgroundColor,
  generateHeaderBoxShadow,
  generateHeaderHeight,
  generateHeaderMaxHeight,
  generateHeaderMinHeight
} from "./HeaderStylingService";

const StyledHeader = styled.div`
  z-index: 99;
  align-items: center;
  display: grid;
  background-color: ${(props) => generateHeaderBackgroundColor(props)};
  box-shadow: ${(props) => generateHeaderBoxShadow(props)};
  height: ${(props) => generateHeaderHeight(props)};
  max-height: ${(props) => generateHeaderMaxHeight(props)};
  min-height: ${(props) => generateHeaderMinHeight(props)};
`

export default StyledHeader