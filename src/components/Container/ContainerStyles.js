import styled from "styled-components";
import {
  generateContainerBackgroundColor as generateBackgroundColor,
  generateContainerMinHeight as generateMinHeight,
  generateContainerPadding as generatePadding,
  generateContainerMinWidth as generateMinWidth,
  generateContainerMaxWidth as generateMaxWidth
} from "./ContainerStylingService";

const ContainerDiv = styled.div`
  background-color: ${(props) => generateBackgroundColor(props)};
  max-height: ${(props) => generateMinHeight(props)}
  max-width: ${(props) => generateMaxWidth(props)};
  min-height: ${(props) => generateMinHeight(props)};
  min-width: ${(props) => generateMinWidth(props)};
  padding: ${(props) => generatePadding(props)};
`

export default ContainerDiv