import React from 'react';

export const Menu = ({
  links
}) => {
  return(
    <div>
      {links && links.map((link) => (
        link
      ))}
    </div>
  )
}
