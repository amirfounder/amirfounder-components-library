import styled from "styled-components";
import {
  generateContainerBackgroundColor,
  generateContainerMinHeight,
  generateContainerPadding,
  generateContainerMinWidth,
  generateContainerMaxWidth
} from "./ContainerStylingService";

const ContainerDiv = styled.div`
  background-color: ${(props) => generateContainerBackgroundColor(props)};
  max-height: ${(props) => generateContainerMinHeight(props)}
  max-width: ${(props) => generateContainerMaxWidth(props)};
  min-height: ${(props) => generateContainerMinHeight(props)};
  min-width: ${(props) => generateContainerMinWidth(props)};
  padding: ${(props) => generateContainerPadding(props)};
`

export default ContainerDiv