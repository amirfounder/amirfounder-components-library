import React from 'react';
import styled from 'styled-components';
import { generateClassNameString, generateGradient } from '../../utils/Helpers';
import styles from './Section.module.scss';
import SectionColumn from './SectionColumn';

const StyledSection = styled.div`
  background-image: ${props => `url${props.backgroundImage}`};
`

/**
 * @name Section
 * @description Redners the Section component
 * @param {*} Props props
 * @returns Component
 */
export const Section = (props) => {
  const {
    background = '',
    children,
    classes,
    columns,
    style,
    ...other
  } = props;

  const {
    image,
    overlay = '',
    size
  } = background;
  
  const {
    colors,
    direction
  } = overlay;

  const className =
    generateClassNameString(styles, classes);

  const gradient =
    generateGradient(colors, direction);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(${gradient}), url(${image})`,
        backgroundSize: size,
        height: '50vh',
        ...style
      }}
      {...other}
      className={className}
    >
      <div
        style={{
          height: '100%',
          gridTemplateColumns: columns || '1fr 1fr'
        }}
      >
        {children}
      </div>
    </div>
  )
}

Section.Column = SectionColumn
