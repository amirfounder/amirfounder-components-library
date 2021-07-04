import styled from "styled-components";
import {
  generateSectionGridTemplateColumns,
  generateSectionAlignItems,
  generateSectionHeight,
  generateBackgroundColor,
  generateSectionPadding
} from "./SectionStylingService";

const SectionDiv = styled.div`
  z-index: 0;
  grid-template-columns: ${(props) => generateSectionGridTemplateColumns(props.columns, props.children)};
  align-items: ${(props) => generateSectionAlignItems(props.verticalAlignment)};
  padding: ${(props) => generateSectionPadding(props.padding)};
  min-height: ${(props) => generateSectionHeight(props.height)};
  background-color: ${(props) => generateBackgroundColor(props.backgroundColor)};
  display: grid;
  column-gap: 1rem;
  align-items: center;
`

export default SectionDiv