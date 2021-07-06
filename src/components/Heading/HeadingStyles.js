import styled, { css } from "styled-components";
import { Constants } from "../../utils/Constants";
import {
  generateHeadingBackgroundAttachment,
  generateHeadingBackground,
  generateHeadingBackgroundRepeat,
  generateHeadingBackgroundSize,
  generateHeadingColor,
  generateHeadingFontSize,
  generateHeadingFontWeight,
  generateHeadingWebkitTextFillColor
} from "./HeadingStylingService";

const shared = css`
  background: ${(props) => generateHeadingBackground(props)};
  background-attachment: ${(props) => generateHeadingBackgroundAttachment(props)};
  background-clip: text;
  background-repeat: ${(props) => generateHeadingBackgroundRepeat(props)};
  background-size: ${(props) => generateHeadingBackgroundSize(props)};
  color: ${(props) => generateHeadingColor(props)};
  font-family: ${Constants.PROPS.FONT_FAMILIES.ROBOTO};
  font-weight: ${(props) => generateHeadingFontWeight(props)};
  margin-block-start: 0em;
  margin-block-end: .5em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${(props) => generateHeadingWebkitTextFillColor(props)};
`

export const StyledH1 = styled.h1`
  ${shared}
  font-size: ${(props) => generateHeadingFontSize(1, props)};
`

export const StyledH2 = styled.h2`
  ${shared}
  font-size: ${(props) => generateHeadingFontSize(2, props)};
`

export const StyledH3 = styled.h3`
  ${shared}
  font-size: ${(props) => generateHeadingFontSize(3, props)};
`

export const StyledH4 = styled.h4`
  ${shared}
  font-size: ${(props) => generateHeadingFontSize(4, props)};
`

export const StyledH5 = styled.h5`
  ${shared}
  font-size: ${(props) => generateHeadingFontSize(5, props)};
`

export const StyledH6 = styled.h6`
  ${shared}
  font-size: ${(props) => generateHeadingFontSize(6, props)};
`