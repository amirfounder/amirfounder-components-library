import React from 'react';
import { generateClassNameString } from '../../utils/Helpers';
import styles from './Modal.module.scss'

import ModalBackground from './ModalBackground';
import ModalBox from './ModalBox';


/**
 * @name Modal
 * @description Renders a modal.
 * @param {*} props Props
 * @prop alignItems
 * @prop backgroundColor
 * @prop theme
 * @prop justifyContent
 * @returns Component
 */
export const Modal = (props) => {
  const {
    children,
    classes,
    show,
    ...other
  } = props;

  const className =
    generateClassNameString(styles, classes)

  return (
    <div
      className={className}
      hidden={!show}
      {...other}
    >
      {children}
    </div>
  )
}

Modal.Background = ModalBackground
Modal.Box = ModalBox
