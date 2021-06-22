import styled from "styled-components";
import { handleJustifySelfStyle } from "./ColumnStylingService";

/**
 * Styling for the Column Component
 */
const ColumnDiv = styled.div`
  align-items: center;
  justify-self: ${(props) => handleJustifySelfStyle(props.alignment)};
`

export default ColumnDiv