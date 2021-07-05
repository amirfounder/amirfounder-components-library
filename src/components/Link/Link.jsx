import React from 'react';
import { useThemeContext } from '../Theme/Theme';
const { useHistory } = require('react-router-dom')
import StyledLink from './LinkStyles'

/**
 * @name Link
 * @description Renders the Link component.
 * @param {*} props Props
 * @prop color
 * @prop fontSize
 * @prop hoverColor
 * @prop size
 * @prop theme
 * @prop weight
 * @returns Component
 */
export const Link = (props) => {
  const theme = useThemeContext();
  const history = useHistory();

  /**
   * @name handleClick
   * @description Uses history to redirect to the provided path
   */
  const handleClick = () => {
    if (props.to) history.push(props.to);
    if (props.href) window.open(props.href, '_blank')
  }
  
  return(
    <StyledLink
      className='af-link'
      onClick={handleClick}
      theme={theme ? theme : null}
      {...props}
    >
      {props.children}
    </StyledLink>
  )
}