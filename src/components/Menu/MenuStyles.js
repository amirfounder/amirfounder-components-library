import styled from 'styled-components';
import {
  generateMenuChildDisplay,
  generateMenuChildMargin,
  generateMenuJustifySelf
} from './MenuStylingService';

export const MenuDiv = styled.div`
  justify-self: ${(props) => generateMenuJustifySelf(props.alignment)};
  padding: 10px 0px;
`

export const MenuChildDiv = styled.div`
  display: ${(props) => generateMenuChildDisplay(props.direction)};
  margin: ${(props) => generateMenuChildMargin(props.alignment)};
`
