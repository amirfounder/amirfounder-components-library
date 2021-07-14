import React from 'react';
import { generateClassNameString } from '../../utils/Helpers';
import styles from './Link.module.scss'
const { useHistory } = require('react-router-dom')

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
    to,
    ...other
  } = props;

  const history = useHistory();

  const handleClick = () => {
    props.to && history.push(props.to);
    props.href && window.open(props.href, '_blank')
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