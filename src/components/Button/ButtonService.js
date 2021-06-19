export const handleFontSizeStyle = (sizeProp) => {
  if (!sizeProp) return '16px'
  if (sizeProp.toLowerCase() === 'large') return '18px'
  if (sizeProp.toLowerCase() === 'medium') return '16px'
  if (sizeProp.toLowerCase() === 'small') return '14px'
  return '16px'
}

export const handlePaddingStyle = (sizeProp) => {
  if (!sizeProp) return '8px 20px'
  if (sizeProp.toLowerCase() === 'large') return '12px 30px'
  if (sizeProp.toLowerCase() === 'medium') return '8px 20px'
  if (sizeProp.toLowerCase() === 'small') return '4px 10px'
  return '8px 20px'
}

export const handleBackgroundColorStyle = (variantProp="filled", backgroundColorProp="black") => {
  if (variantProp.toLowerCase() === 'outline') return "white"
  if (variantProp.toLowerCase() === 'filled') return backgroundColorProp.toLowerCase()
  return backgroundColorProp.toLowerCase()
}

export const handleBorderStyle = (backgroundColorProp="black") => {
  return `1px solid ${backgroundColorProp.toLowerCase()}`
}

/**
 * @name handleColorStyle
 * @description Generates a color based on props given to the button
 * @param {String} variantProp Variant prop - Filled or Outline
 * @param {String} backgroundColorProp Background color prop - Any color
 * @param {String} colorProp Color prop - Any Color. Takes Importance
 * @returns String - color format
 */
export const handleColorStyle = (variantProp="filled", backgroundColorProp="black", colorProp) => {
  if (colorProp) return colorProp.toLowerCase();
  if (variantProp === 'filled') return 'white';
  if (variantProp === 'outline') return backgroundColorProp.toLowerCase();
}