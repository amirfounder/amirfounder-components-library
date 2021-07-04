import styled from 'styled-components';
import {
  generateMenuChildDisplay,
  generateMenuChildMargin,
  generateMenuJustifySelf
} from './MenuStylingService';

export const MenuDiv = styled.div`
  justify-self: ${(props) => generateMenuJustifySelf(props)};
  & > :not(first-child):not(last-child) {
    margin: ${(props) => generateMenuChildMargin(props, 'not-first-not-last')};
  }
  & > :first-child {
    margin: ${(props) => generateMenuChildMargin(props, 'first')};
  }
  & > :last-child {
    margin: ${(props) => generateMenuChildMargin(props, 'last')};
  }
`

export const MenuChildDiv = styled.div`
  display: ${(props) => generateMenuChildDisplay(props)};
`
