import React from 'react';
import { generateClassNameString } from '../../utils/Helpers';
import styles from './Link.module.scss'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled.a``

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
    ...other
  } = props;

  const history = useHistory();
  
  const handleClick = () => {
    props.to && history.push(props.to);
    href && window.open(href, '_blank')
    onClick && onClick();
  }

  const className =
    generateClassNameString(styles, classes)
  
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