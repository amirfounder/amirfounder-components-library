import React from 'react';
// import { useLocation } from 'react-router';
// import { useHistory } from 'react-router';

const { useLocation, useHistory } = require('react-router-dom')

export const LinkPro = ({
  children,
  to
}) => {
  const history = useHistory();
  const location = useLocation();
  return(
    <div
      onClick={() => history.push(to ? to : location.pathname)}
    >
      {children}
    </div>
  )
}