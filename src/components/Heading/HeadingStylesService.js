export const handleColorStyle = (colorProp) => {
  console.log('test')
  if (!colorProp) return 'black';
  console.log('test2')
  return colorProp.toLowerCase()
}

export const handleFontWeightStyle = (weightProp) => {
  if (!weightProp) return 300;
  return weightProp;
}

export const handleFontSizeStyle = (sizeProp, level) => {
  if (!sizeProp) {
    switch(Number(level)) {
      case 1:
        return('4rem')
      case 2:
        return('3rem')
      case 3:
        return('2rem')
      case 4:
        return('1.5rem')
      case 5:
        return('1rem')
      case 6:
        return('.8rem')
      default:
        return('3rem')
    }
  }
  return sizeProp.toLowerCase()
}

export const handleBackgroundRepeatStyle = (backgroundRepeatProp, backgroundImageProp) => {
  if (backgroundImageProp) {
    if (!backgroundRepeatProp) return 'no-repeat'
    return backgroundRepeatProp.toLowerCase()
  }
}

export const handleBackgroundSizeStyle = (backgroundSizeProp, backgroundImageProp) => {
  if (backgroundImageProp) {
    if (!backgroundSizeProp) return 'cover'
    return backgroundSizeProp.toLowerCase()
  }
}

export const handleBackgroundAttachmentStyle = (backgroundAttachmentProp, backgroundImageProp) => {
  if (backgroundImageProp) {
    if (!backgroundAttachmentProp) return 'scroll'
    return backgroundAttachmentProp.toLowerCase()
  }
}

export const handleBackgroundImageStyle = (backgroundImageProp) => {
  if (!backgroundImageProp) return null
  return `background-image: url(${backgroundImageProp})`
}

export const handleWebkitTextFillColor = (backgroundImageProp) => {
  if (backgroundImageProp) return 'transparent'
}