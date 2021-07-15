import React from 'react';
import { generateClassNameString } from '../../utils/Helpers';
import styles from './Link.module.scss'
import { useHistory } from 'react-router-dom';

/**
 * @name Link
 * @description Renders the Link component.
 * @param {*} props Props
 * @returns Component
 */
export const Link = (props) => {
  const {
    children,
    classes,
    href,
    onClick,
    to,
    ...other
  } = props;

  
  const handleClick = () => {
    const history = useHistory();
    to && history.push(to);
    href && window.open(href, '_blank')
    onClick && onClick();
  }

  const className =
    generateClassNameString(styles, classes)
  
  return(
    <a
      className={className}
      onClick={handleClick}
      {...other}
    >
      {props.children}
    </a>
  )
}