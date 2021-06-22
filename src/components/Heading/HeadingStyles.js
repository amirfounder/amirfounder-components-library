import styled, { css } from "styled-components";
import {
  generateBackgroundAttachmentStyle,
  generateBackgroundImageStyle,
  generateBackgroundRepeatStyle,
  generateBackgroundSizeStyle,
  handleColorStyle,
  handleFontSizeStyle,
  handleFontWeightStyle,
  handleWebkitTextFillColor
} from "./HeadingStylingService";

const shared = css`
  ${(props) => generateBackgroundImageStyle(props.backgroundImage)};
  background-attachment: ${(props) => generateBackgroundAttachmentStyle(props.backgroundAttachment)};
  background-size: ${(props) => generateBackgroundSizeStyle(props.backgroundSize)};
  background-clip: text;
  background-repeat: ${(props) => generateBackgroundRepeatStyle(props.backgroundRepeatStyle)};
  color: ${(props) => handleColorStyle(props.color)};
  font-weight: ${(props) => handleFontWeightStyle(props.weight)};
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${(props) => handleWebkitTextFillColor(props.backgroundImage)};
`

export const HeadingH1 = styled.h1`
  ${shared}
  font-size: ${(props) => handleFontSizeStyle(1, props.size)};
`

export const HeadingH2 = styled.h2`
  ${shared}
  font-size: ${(props) => handleFontSizeStyle(2, props.size)};
`

export const HeadingH3 = styled.h3`
  ${shared}
  font-size: ${(props) => handleFontSizeStyle(3, props.size)};
`

export const HeadingH4 = styled.h4`
  ${shared}
  font-size: ${(props) => handleFontSizeStyle(4, props.size)};
`

export const HeadingH5 = styled.h5`
  ${shared}
  font-size: ${(props) => handleFontSizeStyle(5, props.size)};
`

export const HeadingH6 = styled.h6`
  ${shared}
  font-size: ${(props) => handleFontSizeStyle(6, props.size)};
`