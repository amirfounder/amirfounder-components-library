export const generateHeadingColor = (colorProp) => colorProp ? colorProp.toLowerCase() : 'black'

export const generateHeadingFontWeight = (fontWeightProp) => fontWeightProp ? fontWeightProp.toLowerCase() : 300

export const generateHeadingFontSize = (level, fontSizeProp) => {
  if (fontSizeProp) return fontSizeProp.toLowerCase();
  if (level) {
    if (Number(level) === 1) return '4rem';
    if (Number(level) === 2) return '3rem';
    if (Number(level) === 3) return '2rem';
    if (Number(level) === 4) return '1.6rem';
    if (Number(level) === 5) return '1.2rem';
    if (Number(level) === 6) return '0.8rem';
  }
  return '3rem'
}

export const generateHeadingBackgroundRepeat = (backgroundRepeatProp, backgroundProp) => {
  if (backgroundProp) {
    if (!backgroundRepeatProp) return 'no-repeat'
    return backgroundRepeatProp.toLowerCase()
  }
}

export const generateHeadingBackgroundSize = (backgroundSizeProp, backgroundProp) => {
  if (backgroundProp) {
    if (!backgroundSizeProp) return 'cover'
    return backgroundSizeProp.toLowerCase()
  }
}

export const generateHeadingBackgroundAttachment = (backgroundAttachmentProp, backgroundProp) => {
  if (backgroundProp) {
    if (!backgroundAttachmentProp) return 'scroll'
    return backgroundAttachmentProp.toLowerCase()
  }
}

export const generateHeadingBackground = (backgroundProp) => backgroundProp ? `url(${backgroundProp})` : 'none'

export const generateHeadingWebkitTextFillColor = (backgroundProp) => backgroundProp && 'transparent'