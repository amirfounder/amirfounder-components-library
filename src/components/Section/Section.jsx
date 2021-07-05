import React from 'react';
import { useThemeContext } from '../Theme/Theme';
import SectionDiv from './SectionStyles';

/**
 * @name Section
 * @description Redners the Section component
 * @param {*} Props props
 * @prop alignItems
 * @prop backgroundColor
 * @prop columns
 * @prop minHeight
 * @prop padding
 * @prop theme
 * @prop verticalAlignment
 * @returns Component
 */
export const Section = (props) => {
  const theme = useThemeContext();
  return (
    <SectionDiv
      className='af-section'
      padding={props.padding ? props.padding : '0 3vw'}
      theme={theme ? theme : null}
      {...props}
    >
      {props.children}
    </SectionDiv>
  )
}