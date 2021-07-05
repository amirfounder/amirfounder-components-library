import React from 'react';
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
 * @prop verticalAlignment
 * @returns Component
 */
export const Section = (props) => {
  return (
    <SectionDiv
      className='af-section'
      padding={props.padding ? props.padding : '0 3vw'}
      {...props}
    >
      {props.children}
    </SectionDiv>
  )
}