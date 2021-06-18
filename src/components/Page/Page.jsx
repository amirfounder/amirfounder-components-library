import React from 'react';
import './Page.css'

export const Page = ({
  minHeight,
  verticalPadding,
  sidePadding,
  children
}) => {
  return(
    <div
      className={`
        page
      `}
      style={{
        minHeight: `${minHeight ? minHeight.toLowerCase() : '90vh'}`,
        padding: `${verticalPadding ? verticalPadding : '5vh'} ${sidePadding ? sidePadding.toLowerCase() : '3vw'}`,
      }}
    >
      {children}
    </div>
  )
}