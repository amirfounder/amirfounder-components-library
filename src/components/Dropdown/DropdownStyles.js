import styled from "styled-components";
import { generateDropdownPadding } from "./DropdownStylingService";

export const StyledDropdownContainer = styled.div`
  display: inline-block;
`

export const StyledDropdown = styled.div`
  position: absolute;
  padding: ${(props) => generateDropdownPadding(props)};
`

export const StyledDropdownAnchorWrapper = styled.span``