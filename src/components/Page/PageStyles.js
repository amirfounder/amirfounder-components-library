import styled from "styled-components";
import { generatePageBackgroundColor } from "./PageStylingService";

const StyledPage = styled.div`
  z-index: 0;
  background-color: ${(props) => generatePageBackgroundColor(props)};
`

export default StyledPage