import React from 'react';
import { useThemeContext } from '../Theme/Theme';
const { useHistory } = require('react-router-dom')
import LogoDiv from './LogoStyles';

/**
 * @name Logo
 * @description Renders the Logo component
 * @param {*} props Props
 * @prop color
 * @prop fontSize
 * @prop them
 * @returns Component
 */
export const Logo = (props) => {
  const theme = useThemeContext();
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
      theme={theme}
      {...props} 
    >
      {props.children ? props.children : 'Amir Sharapov'}
    </LogoDiv>
  )
}