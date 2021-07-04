import styled from 'styled-components';
import {
  generateMenuChildDisplay,
  generateMenuDirectChildMargin,
  generateMenuDirectChildPadding,
  generateMenuJustifySelf
} from './MenuStylingService';

export const MenuDiv = styled.div`
  justify-self: ${(props) => generateMenuJustifySelf(props)};
`

export const MenuChildDiv = styled.div`
  display: ${(props) => generateMenuChildDisplay(props)};
  padding: ${(props) => generateMenuDirectChildPadding(props)};
  :only-child {
    margin: ${(props) => generateMenuDirectChildMargin(props, 'only')};
  }
  :last-child {
    margin: ${(props) => generateMenuDirectChildMargin(props, 'last')};
  }
  :first-child {
    margin: ${(props) => generateMenuDirectChildMargin(props, 'first')};
  }
  :not(first-child):not(last-child) {
    margin: ${(props) => generateMenuDirectChildMargin(props, 'not-first-not-last')};
  }
`
