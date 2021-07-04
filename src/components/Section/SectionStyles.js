import styled from "styled-components";
import {
  generateSectionGridTemplateColumns,
  generateSectionAlignItems,
  generateSectionMinHeight,
  generateBackgroundColor,
  generateSectionPadding
} from "./SectionStylingService";

const SectionDiv = styled.div`
  z-index: 0;
  grid-template-columns: ${(props) => generateSectionGridTemplateColumns(props)};
  align-items: ${(props) => generateSectionAlignItems(props)};
  padding: ${(props) => generateSectionPadding(props)};
  min-height: ${(props) => generateSectionMinHeight(props)};
  background-color: ${(props) => generateBackgroundColor(props)};
  display: grid;
  column-gap: 1rem;
  align-items: center;
`

export default SectionDiv