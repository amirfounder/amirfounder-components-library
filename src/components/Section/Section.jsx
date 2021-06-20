import React from 'react';
import './Section.css'
import SectionDiv from './SectionStyles';

/**
 * @name Section
 * @description Redners a section that allows multiple columns. Recommended to use column componenet as children wrapper.
 * @param {*} Props children, columns, className, horizontalPadding, backgroundColor, verticalPadding, minHeight, verticalAlign
 * @returns Component
 */
export const Section = ({
  columns,
  children,
  horizontalPadding,
  backgroundColor,
  verticalPadding,
  height,
  verticalAlignment
}) => {
  return (
    <SectionDiv
      className='af-section'
      verticalAlignment={verticalAlignment}
      verticalPadding={verticalPadding}
      horizontalPadding={horizontalPadding}
      columns={columns}
      height={height}
      backgroundColor={backgroundColor}
    >
      {children}
    </SectionDiv>
  )
}