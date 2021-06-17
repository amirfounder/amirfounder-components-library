import React from 'react';

export const Heading = ({
  children,
  level
}) => {
  return(
    <>
      {
        !level ? <h2 className={`heading h2`}>{children}</h2> :
        level.toLowerCase() == '1' ? <h1 className={`heading h1`}>{children}</h1> :
        level.toLowerCase() == '2' ? <h2 className={`heading h2`}>{children}</h2> :
        level.toLowerCase() == '3' ? <h3 className={`heading h3`}>{children}</h3> :
        level.toLowerCase() == '4' ? <h4 className={`heading h4`}>{children}</h4> :
        level.toLowerCase() == '5' ? <h5 className={`heading h5`}>{children}</h5> :
        level.toLowerCase() == '6' ? <h6 className={`heading h6`}>{children}</h6> :
        <h2 className={`heading h2`}>{children}</h2>
      }
    </>
  )
}