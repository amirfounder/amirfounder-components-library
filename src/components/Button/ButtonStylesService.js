export const generateButtonPadding = (sizeProp) => {
  if (!sizeProp) return '8px 20px'
  if (sizeProp.toLowerCase() === 'large') return '12px 30px'
  if (sizeProp.toLowerCase() === 'medium') return '8px 20px'
  if (sizeProp.toLowerCase() === 'small') return '4px 10px'
  return '8px 20px'
}

export const generateButtonFontSize = (sizeProp) => {
  if (!sizeProp) return '16px';
  if (sizeProp.toLowerCase() === 'large') return '20px';
  if (sizeProp.toLowerCase() === 'medium') return '16px';
  if (sizeProp.toLowerCase() === 'small') return '12px';
  return sizeProp.toLowerCase();
}

// ALLOW USER TO SELECT DIFFERENT WIDTHS AND TYPES

export const generateButtonBorder = (backgroundColorProp) => {
  if (!backgroundColorProp) return '1px solid black'
  return `1px solid ${backgroundColorProp.toLowerCase()}`
}

export const handleBackgroundColorStyle = (variantProp, backgroundColorProp) => {
  if (backgroundColorProp) return backgroundColorProp.toLowerCase();
  if (!variantProp) return 'black'
  if (variantProp.toLowerCase() === 'outline') return "white"
  if (variantProp.toLowerCase() === 'filled') {
    if (!backgroundColorProp) return 'black'
    return backgroundColorProp.toLowerCase()
  }
  return backgroundColorProp.toLowerCase()
}

/**
 * @name handleColorStyle
 * @description Generates a color based on props given to the button
 * @param {String} variantProp Variant prop - Filled or Outline
 * @param {String} backgroundColorProp Background color prop - Any color
 * @param {String} colorProp Color prop - Any Color. Takes Importance
 * @returns String - color format
 */
export const handleColorStyle = (variantProp, backgroundColorProp, colorProp) => {
  if (colorProp) return colorProp.toLowerCase();
  if (!variantProp) return 'white'
  if (variantProp === 'filled') return 'white';
  if (variantProp === 'outline') {
    if (!backgroundColorProp) return 'black'
    return backgroundColorProp.toLowerCase();
  };
}

export const handleHoverBackgroundColorStyle = (variantProp, backgroundColorProp, hoverBackgroundColorProp) => {
  if (hoverBackgroundColorProp) return hoverBackgroundColorProp.toLowerCase()
  if (!variantProp) return '#333'
  if (variantProp.toLowerCase() === 'filled') return '#333';
  if (variantProp.toLowerCase() === 'outline') {
    if (!backgroundColorProp) return 'black';
    return backgroundColorProp.toLowerCase();
  }
}

export const handleHoverColorStyle = (variantProp, hoverColorProp) => {
  if (hoverColorProp) return hoverColorProp.toLowerCase();
  if (!variantProp || variantProp === 'filled' || variantProp === 'outline') return 'white';
}

export const handleHoverBorderColorStyle = (variantProp, backgroundColorProp, hoverBorderColorProp) => {
  if (hoverBorderColorProp) return `1px solid ${hoverBorderColorProp}`
  if (!backgroundColorProp) {
    if (variantProp === 'filled') return '1px solid #666'
    if (variantProp === 'outline') return '1px solid black'
  }
  return '1px solid black'
}