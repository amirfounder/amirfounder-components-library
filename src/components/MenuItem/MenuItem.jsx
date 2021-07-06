import React from 'react';
import { StyledMenuItem } from './MenuItemStyles';
import { Link } from '../Link/Link'

export const MenuItem = (props) => {
  return (
    <StyledMenuItem className='af-menu-item'>
      <Link
        to={props.to}
        {...props}
      >
        {props.children}
      </Link>
    </StyledMenuItem>
  )
}