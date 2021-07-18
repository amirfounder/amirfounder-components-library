import React from 'react';

export const RestrictedContent = (props) => {
  const {
    condition,
    classes,
    children,
    ...other
  } = props;

  return (
    <div>
      {children}
    </div>
  )
}