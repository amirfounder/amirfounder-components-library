import React from 'react';
import styles from './Button.module.scss';
import { generateClassNameString } from '../../utils/Helpers';
import { useHistory } from 'react-router-dom';

/**
 * @nmae Button
 * @description Renders the Button component
 * @param {*} props Props
 * @prop classes
 * @prop label
 * @returns Component
 */
export const Button = (props) => {
  const {
    children,
    classes,
    href,
    label,
    onClick,
    to,
    ...other
  } = props;

  const history = useHistory();

  const className =
    generateClassNameString(styles, classes);
  
  const handleClick = () => {
    if (to) history.push(to)
    if (href) window.open(href, '_blank')
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={className}
      {...other}
    >
      {children || label}
    </button>
  );
};
