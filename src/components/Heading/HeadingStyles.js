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
  background: ${(props) => generateHeadingBackground(props.backgroundImage)};
  background-attachment: ${(props) => generateHeadingBackgroundAttachment(props.backgroundAttachment, props.background)};
  background-clip: text;
  background-repeat: ${(props) => generateHeadingBackgroundRepeat(props.backgroundRepeat, props.background)};
  background-size: ${(props) => generateHeadingBackgroundSize(props.backgroundSize, props.background)};
  color: ${(props) => generateHeadingColor(props.color)};
  font-family: ${Constants.PROPS.FONT_FAMILIES.ROBOTO};
  font-weight: ${(props) => generateHeadingFontWeight(props.fontWeight)};
  margin-block-start: 0em;
  margin-block-end: .5em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${(props) => generateHeadingWebkitTextFillColor(props.background)};
`

export const HeadingH1 = styled.h1`
  ${shared}
  font-size: ${(props) => generateHeadingFontSize(1, props.size)};
`

export const HeadingH2 = styled.h2`
  ${shared}
  font-size: ${(props) => generateHeadingFontSize(2, props.size)};
`

export const HeadingH3 = styled.h3`
  ${shared}
  font-size: ${(props) => generateHeadingFontSize(3, props.size)};
`

export const HeadingH4 = styled.h4`
  ${shared}
  font-size: ${(props) => generateHeadingFontSize(4, props.size)};
`

export const HeadingH5 = styled.h5`
  ${shared}
  font-size: ${(props) => generateHeadingFontSize(5, props.size)};
`

export const HeadingH6 = styled.h6`
  ${shared}
  font-size: ${(props) => generateHeadingFontSize(6, props.size)};
`