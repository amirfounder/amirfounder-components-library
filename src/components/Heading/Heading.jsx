import React from 'react';

import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6
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
      {!props.level ? <StyledH2 className="af-heading" {...props}>{props.children}</StyledH2> :
        Number(props.level) === 1 ? <StyledH1 className="af-heading" theme={theme ? theme : null} {...props}>{props.children}</StyledH1> :
          Number(props.level) === 2 ? <StyledH2 className="af-heading" theme={theme ? theme : null} {...props}>{props.children}</StyledH2> :
            Number(props.level) === 3 ? <StyledH3 className="af-heading" theme={theme ? theme : null} {...props}>{props.children}</StyledH3> :
              Number(props.level) === 4 ? <StyledH4 className="af-heading" theme={theme ? theme : null} {...props}>{props.children}</StyledH4> :
                Number(props.level) === 5 ? <StyledH5 className="af-heading" theme={theme ? theme : null} {...props}>{props.children}</StyledH5> :
                  Number(props.level) === 6 ? <StyledH6 className="af-heading" theme={theme ? theme : null} {...props}>{props.children}</StyledH6> :
                    <StyledH2 className="af-heading" {...props}>{props.children}</StyledH2>}
    </>
  )
}