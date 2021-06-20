import React from 'react';
import { useHistory } from 'react-router-dom';
import './Logo.css'
import LogoDiv from './LogoStyles';

/**
 * @name Logo
 * @description Renders the 'amirfounder' logo
 * @param {*} Props size, onClick
 * @returns Component
 */
export const Logo = ({
  size,
  onClick
}) => {

  const history = useHistory();

  /**
   * @name handleClick
   * @description Uses history to redirect to the root path '/' if onclick not specified
   * @returns null
   */
  const handleClick = () => {
    onClick ? onClick() : history.push("/")
  }

  return (
    <LogoDiv
      className='af-logo'
      onClick={handleClick}
      size={size}
    >
      Amir Sharapov
    </LogoDiv>
  )
}