import React from 'react';
import { useThemeContext } from '../Theme/Theme';
import {
  HeadingH1,
  HeadingH2,
  HeadingH3,
  HeadingH4,
  HeadingH5,
  HeadingH6
} from './HeadingStyles';

/**
 * @name Heading
 * @description Renders the Heading component
 * @param {*} props Props
 * @prop background
 * @prop backgroundAttachment
 * @prop backgroundRepeat
 * @prop backgroundSize
 * @prop color
 * @prop fontSize
 * @prop fontWeight
 * @prop theme
 * @returns Component
 */
export const Heading = (props) => {
  const theme = useThemeContext();
  return (
    <>
      {
        !props.level ? <HeadingH2 className="af-heading" {...props}>{props.children}</HeadingH2> :
        Number(props.level) === 1 ? <HeadingH1 className="af-heading" theme={theme ? theme : null} {...props}>{props.children}</HeadingH1> :
        Number(props.level) === 2 ? <HeadingH2 className="af-heading" theme={theme ? theme : null} {...props}>{props.children}</HeadingH2> :
        Number(props.level) === 3 ? <HeadingH3 className="af-heading" theme={theme ? theme : null} {...props}>{props.children}</HeadingH3> :
        Number(props.level) === 4 ? <HeadingH4 className="af-heading" theme={theme ? theme : null} {...props}>{props.children}</HeadingH4> :
        Number(props.level) === 5 ? <HeadingH5 className="af-heading" theme={theme ? theme : null} {...props}>{props.children}</HeadingH5> :
        Number(props.level) === 6 ? <HeadingH6 className="af-heading" theme={theme ? theme : null} {...props}>{props.children}</HeadingH6> :
        <HeadingH2 className="af-heading" {...props}>{props.children}</HeadingH2>
      }
    </>
  )
}