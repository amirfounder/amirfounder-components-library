import React from 'react';
import { generateClassNameString } from '../../utils/Helpers';
import styles from './Section.module.scss';
import SectionColumn from './SectionColumn';

/**
 * @name Section
 * @description Redners the Section component
 * @param {*} Props props
 * @returns Component
 */
export const Section = (props) => {
  const {
    bgImg,
    children,
    classes,
    ...other
  } = props

  const className = 
    generateClassNameString(
      styles,
      classes
        ?.split(' ')
    );

  return (
    <div
      // created styled component and add bgImg to styled component
      style={{ backgroundImage: `url(${bgImg})` }}
      className={className}
      {...other}
    >
      <div>
        {children}
      </div>
    </div>
  )
}

Section.Column = SectionColumn
