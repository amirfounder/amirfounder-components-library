import React from 'react';
import StyledLink from './StyledLink'
import styles from './Link.module.scss'
import { generateClassNameString } from '../../utils/Helpers';
const { useHistory } = require('react-router-dom')

/**
 * @name Link
 * @description Renders the Link component.
 * @param {*} props Props
 * @returns Component
 */
export const Link = (props) => {
  const {
    to,
    classes,
    ...other
  } = props;

  const history = useHistory();

  /**
   * @name handleClick
   * @description Uses history to redirect to the provided path
   */
  const handleClick = () => {
    if (props.to) history.push(props.to);
    if (props.href) window.open(props.href, '_blank')
  }

  const className =
    generateClassNameString(styles, classes);
  
  return(
    <StyledLink
      className={className}
      onClick={handleClick}
      {...other}
    >
      {props.children}
    </StyledLink>
  )
}