import styled from "styled-components";
import {
  generateColumnJustifySelf as generateJustifySelf
} from "./ColumnStylingService";

/**
 * Styling for the Column Component
 */
const ColumnDiv = styled.div`
  align-items: center;
  justify-self: ${(props) => generateJustifySelf(props)};
`

export default ColumnDiv