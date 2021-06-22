import styled from 'styled-components';
import { handleAlignmentStyle, handleDirectionStyle, handleMenuDivAlignment } from './MenuStylingService';

export const MenuDiv = styled.div`
  justify-self: ${(props) => handleMenuDivAlignment(props.alignment)};
`

export const MenuChildDiv = styled.div`
  display: ${(props) => handleDirectionStyle(props.direction)};
  margin: ${(props) => handleAlignmentStyle(props.alignment)};
`
