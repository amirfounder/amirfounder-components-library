export const handleColorStyle = (colorProp) => {
  if (!colorProp) return 'black';
  return colorProp.toLowerCase()
}

export const handleFontWeightStyle = (weightProp) => {
  if (!weightProp) return 300;
  return weightProp;
}

export const handleFontSizeStyle = (level, fontSizeProp) => {
  if (fontSizeProp) return fontSizeProp.toLowerCase();
  if (Number(level) === 1) return '4rem';
  if (Number(level) === 2) return '3rem';
  if (Number(level) === 3) return '2rem';
  if (Number(level) === 4) return '1.6rem';
  if (Number(level) === 5) return '1.2rem';
  if (Number(level) === 6) return '0.8rem';
  return '3rem'
}

export const generateBackgroundRepeatStyle = (backgroundRepeatProp, backgroundImageProp) => {
  if (backgroundImageProp) {
    if (!backgroundRepeatProp) return 'no-repeat'
    return backgroundRepeatProp.toLowerCase()
  }
}

export const generateBackgroundSizeStyle = (backgroundSizeProp, backgroundImageProp) => {
  if (backgroundImageProp) {
    if (!backgroundSizeProp) return 'cover'
    return backgroundSizeProp.toLowerCase()
  }
}

export const generateBackgroundAttachmentStyle = (backgroundAttachmentProp, backgroundImageProp) => {
  if (backgroundImageProp) {
    if (!backgroundAttachmentProp) return 'scroll'
    return backgroundAttachmentProp.toLowerCase()
  }
}

export const generateBackgroundImageStyle = (backgroundImageProp) => {
  if (!backgroundImageProp) return null
  return `background-image: url(${backgroundImageProp})`
}

export const handleWebkitTextFillColor = (backgroundImageProp) => {
  if (backgroundImageProp) return 'transparent'
}