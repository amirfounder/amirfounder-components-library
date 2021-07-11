import styled from 'styled-components';
import {
  generateMenuJustifySelf,
  generateMenuItemDisplay,
  generateMenuItemMargin,
  generateMenuItemPadding,
  generateMenuBackgroundColor
} from './MenuStylingService';

export const StyledMenu = styled.ul`
  background-color: ${(props) => generateMenuBackgroundColor(props)};
  justify-self: ${(props) => generateMenuJustifySelf(props)};
  list-style-type: none;
  position: relative;
  padding: 0px;
  & > li {
    display: ${(props) => generateMenuItemDisplay(props)};
    padding: ${(props) => generateMenuItemPadding(props)};
  }
  & > :only-child {
    margin: ${(props) => generateMenuItemMargin(props, 'only')};
  }
  & > :last-child {
    margin: ${(props) => generateMenuItemMargin(props, 'last')};
  }
  & > :first-child {
    margin: ${(props) => generateMenuItemMargin(props, 'first')};
  }
  & > :not(first-child):not(last-child) {
    margin: ${(props) => generateMenuItemMargin(props, 'not-first-not-last')};
  }
`
