import styled, { css } from "styled-components";
import {
  handleBackgroundAttachmentStyle,
  handleBackgroundImageStyle,
  handleBackgroundRepeatStyle,
  handleBackgroundSizeStyle,
  handleColorStyle,
  handleFontSizeStyle,
  handleFontWeightStyle,
  handleWebkitTextFillColor
} from "./HeadingStylesService";

const shared = () => css`
  ${(props) => handleBackgroundImageStyle(props.backgroundImage)};
  background-attachment: ${(props) => handleBackgroundAttachmentStyle(props.backgroundAttachment)};
  background-size: ${(props) => handleBackgroundSizeStyle(props.backgroundSize)};
  background-clip: text;
  background-repeat: ${(props) => handleBackgroundRepeatStyle(props.backgroundRepeatStyle)};
  color: ${(props) => handleColorStyle(props.color)};
  font-weight: ${(props) => handleFontWeightStyle(props.weight)};
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${(props) => handleWebkitTextFillColor(props.backgroundImage)};
`

export const HeadingH1 = styled.h1`
  ${shared}
  font-size: ${(props) => handleFontSizeStyle(props.size, 1)};
`

export const HeadingH2 = styled.h2`
  ${shared}
  font-size: ${(props) => handleFontSizeStyle(props.size, 2)};
`

export const HeadingH3 = styled.h3`
  ${shared}
  font-size: ${(props) => handleFontSizeStyle(props.size, 3)};
`

export const HeadingH4 = styled.h4`
  ${shared}
  font-size: ${(props) => handleFontSizeStyle(props.size, 4)};
`

export const HeadingH5 = styled.h5`
  ${shared}
  font-size: ${(props) => handleFontSizeStyle(props.size, 5)};
`

export const HeadingH6 = styled.h6`
  ${shared}
  font-size: ${(props) => handleFontSizeStyle(props.size, 6)};
`