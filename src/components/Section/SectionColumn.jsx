import React from 'react';
import { generateClassNameString } from '../../utils/Helpers';
import styles from './Section.module.scss'

const SectionColumn = (props) => {
  const {
    children,
    classes,
    ...other
  } = props;

  const className = 
    generateClassNameString(
      styles,
      classes
        ?.split(' ')
    )

  return (
    <div
      className={className}
      {...other}
    >
      {children}
    </div>
  )
}

export default SectionColumn;