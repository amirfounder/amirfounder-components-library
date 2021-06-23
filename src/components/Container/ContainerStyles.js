import styled from "styled-components";
import {
  generateContainerBackgroundColor,
  generateContainerMinHeight,
  generateContainerPadding,
  generateContainerMinWidth,
  generateContainerMaxWidth
} from "./ContainerStylingService";

const ContainerDiv = styled.div`
  background-color: ${(props) => generateContainerBackgroundColor(props.backgroundColor)};
  max-width: ${(props) => generateContainerMaxWidth(props.width, props.maxWidth)};
  min-height: ${(props) => generateContainerMinHeight(props.height, props.minHeight)};
  min-width: ${(props) => generateContainerMinWidth(props.width, props.minWidth)};
  padding: ${(props) => generateContainerPadding(props.size, props.padding)};
`

export default ContainerDiv