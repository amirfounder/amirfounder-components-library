import styled from "styled-components";
import {
  generateContainerBackgroundColor,
  generateContainerMinHeight,
  generateContainerPadding,
  generateContainerMinWidth,
  generateContainerMaxWidth,
  generateContainerMargin
} from "./ContainerStylingService";

const StyledContainer = styled.div`
  background-color: ${(props) => generateContainerBackgroundColor(props)};
  max-height: ${(props) => generateContainerMinHeight(props)};
  max-width: ${(props) => generateContainerMaxWidth(props)};
  min-height: ${(props) => generateContainerMinHeight(props)};
  min-width: ${(props) => generateContainerMinWidth(props)};
  padding: ${(props) => generateContainerPadding(props)};
  margin: ${(props) => generateContainerMargin(props)};
`

export default StyledContainer