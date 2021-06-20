import styled from "styled-components";
import {
  handleColumnsStyle,
  handleVerticalAlignmentStyle,
  handleVerticalPaddingStyle,
  handleHorizontalPaddingStyle,
  handleHeightStyle,
  handleBackgroundColorStyle
} from "./SectionService";

const SectionDiv = styled.div`
  grid-template-columns: ${(props) => handleColumnsStyle(props.columns, props.children)};
  align-items: ${(props) => handleVerticalAlignmentStyle(props.verticalAlignment)};
  padding: ${(props) => handleVerticalPaddingStyle(props.verticalPadding) + ' ' + handleHorizontalPaddingStyle(props.horizontalPadding)};
  min-height: ${(props) => handleHeightStyle(props.height)};
  background-color: ${(props) => handleBackgroundColorStyle(props.backgroundColor)};
`

export default SectionDiv