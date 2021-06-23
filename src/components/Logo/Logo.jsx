import React from 'react';
const { useHistory } = require('react-router-dom')
import LogoDiv from './LogoStyles';

/**
 * @name Logo
 * @description Renders the Logo component
 * @param {*} props Props
 * @returns Component
 */
export const Logo = (props) => {
  const history = useHistory();

  /**
   * @name handleClick
   * @description Uses history to redirect to the root path '/' if onclick not specified
   * @returns null
   */
  const handleClick = () => props.onClick ? props.onClick() : history.push("/")

  return (
    <LogoDiv
      className='af-logo'
      onClick={handleClick}
      {...props}
    >
      Amir Sharapov {props.unit}
    </LogoDiv>
  )
}