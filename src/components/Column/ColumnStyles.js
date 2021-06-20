import styled from "styled-components";
import { handleJustifySelfStyle } from "./ColumnService";

const ColumnDiv = styled.div`
  justify-self: ${(props) => handleJustifySelfStyle(props.alignment)};
`

export default ColumnDiv