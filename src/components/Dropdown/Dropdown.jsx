import React, { useState } from 'react';
import PropTypes from 'prop-types'
import {
  StyledDropdown,
  StyledDropdownAnchorWrapper,
  StyledDropdownContainer
} from './DropdownStyles';
import { useThemeContext } from '../Theme/Theme';

export const Dropdown = (props) => {
  const theme = useThemeContext();
  const [show, setShow] = useState(false);

  const handleMouseOver = () => setShow(true)
  const handleMouseOut = () => setShow(false)

  return (
    <StyledDropdownContainer
      className='af-dropdown'
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    >
      <StyledDropdownAnchorWrapper
        className='af-anchor-wrapper'
      >
        {props.anchor()}
      </StyledDropdownAnchorWrapper>
      <StyledDropdown
        className='af-dropdown-container'
        hidden={!show}
        theme={theme ? theme : null}
        {...props}
      >
        {props.children}
      </StyledDropdown>
    </StyledDropdownContainer>
  )
}

Dropdown.PropTypes = {
  anchor: PropTypes.element
}