import styled from "styled-components";
import { generateSubMenuTransform } from "./SubMenuStylingService";

const StyledSubMenu = styled.div`
  position: absolute;
  transform: ${(props) => generateSubMenuTransform(props)};
`

export default StyledSubMenu