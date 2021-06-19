import React from 'react';
const { useHistory } = require('react-router-dom')
import LinkDiv from './LinkStyles'
import './Link.css'

/**
 * @name Link
 * @description Renders a Custom Link Component.
 * @param {*} Props children, to, color
 * @returns Component
 */
export const Link = ({
  children,
  to,
  color,
  size,
  weight,
  hoverColor
}) => {

  const history = useHistory();

  /**
   * @name handleClick
   * @description Uses history to redirect to the provided path
   */
  const handleClick = () => to && history.push(to)
  
  return(
    <LinkDiv
      className='af-link'
      color={color}
      size={size}
      weight={weight}
      hoverColor={hoverColor}
      onClick={handleClick}
    >
      {children}
    </LinkDiv>
  )
}