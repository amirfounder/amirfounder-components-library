import React from 'react';
const { useHistory } = require('react-router-dom')
import LinkDiv from './LinkStyles'
import './Link.css'

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
    <LinkDiv
      className='af-link'
      onClick={handleClick}
      {...props}
    >
      {props.children}
    </LinkDiv>
  )
}