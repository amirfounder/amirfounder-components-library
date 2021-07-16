import React from 'react';
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
    children,
    href,
    onClick,
    ...other
  } = props;

  const history = useHistory();

  /**
   * @name handleClick
   * @description Uses history to redirect to the provided path
   */
  const handleClick = () => {
    if (to) history.push(to);
    if (href) window.open(href, '_blank');
    if (onClick) onClick();
  }

  const className =
    generateClassNameString(styles, classes);
  
  return(
    <a
      className={className}
      onClick={handleClick}
      {...other}
    >
      {children}
    </a>
  )
}