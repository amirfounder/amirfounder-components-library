import React from 'react';
import { generateClassNameString } from '../../utils/Helpers';
import styles from './Heading.module.scss'

/**
 * @name Heading
 * @description Renders the Heading component
 * @param {*} props Props
 * @todo bgImg
 * @returns Component
 */
export const Heading = (props) => {
  const {
    children,
    classes,
    level,
    ...other
  } = props;

  const className =
    generateClassNameString(styles, classes)

  return (
    <>
      {
        !level ? <h2 className={className} {...other}>{children}</h2> :
        level == 1 ? <h1 className={className} {...other}>{children}</h1> :
        level == 2 ? <h2 className={className} {...other}>{children}</h2> :
        level == 3 ? <h3 className={className} {...other}>{children}</h3> :
        level == 4 ? <h4 className={className} {...other}>{children}</h4> :
        level == 5 ? <h5 className={className} {...other}>{children}</h5> :
        level == 6 ? <h6 className={className} {...other}>{children}</h6> :
        <h2 className={className} {...other}>{children}</h2>
      }
    </>
  )

}