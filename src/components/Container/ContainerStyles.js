import styled from "styled-components";
import {
  generateContainerBackgroundColor,
  generateContainerHeight,
  generateContainerPadding,
  generateContainerWidth
} from "./ContainerStylingService";

const ContainerDiv = styled.div`
  background-color: ${(props) => generateContainerBackgroundColor(props.backgroundColor)};
  min-height: ${(props) => generateContainerHeight(props.height)};
  min-width: ${(props) => generateContainerWidth(props.width)};
  max-width: ${(props) => generateContainerWidth(props.width)};
  padding: ${(props) => generateContainerPadding(props.size, props.padding)};
`

export default ContainerDiv