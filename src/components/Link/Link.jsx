import React from 'react';
const { useHistory } = require('react-router-dom')
import StyledLink from './LinkStyles'

/**
 * @name Link
 * @description Renders the Link component.
 * @param {*} Props Props
 * @returns Component
 */
export const Link = (props) => {
  const history = useHistory();

  /**
   * @name handleClick
   * @description Uses history to redirect to the provided path
   */
  const handleClick = () => to && history.push(to)
  
  return(
    <StyledLink
      className='af-link'
      onClick={handleClick}
      {...props}
    >
      {props.children}
    </StyledLink>
  )
}