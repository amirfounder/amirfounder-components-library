export const generateButtonBorderColor = (backgroundColorProp, borderColorProp) => {
  if (borderColorProp) return borderColorProp.toLowerCase();
  if (backgroundColorProp) return backgroundColorProp.toLowerCase();
  return 'black'
}

export const generateButtonBackgroundColor = (variantProp, backgroundColorProp) => {
  if (backgroundColorProp) return backgroundColorProp.toLowerCase();
  if (variantProp) {
    if (variantProp.toLowerCase() === 'outline') return 'white';
    if (variantProp.toLowerCase() === 'filled') return 'black';
  }
  return 'black'
}

/**
 * @name generateButtonColor
 * @description Generates CSS styles for the button text
 * @param {String} variantProp Variant
 * @param {Strign} colorProp Color
 * @returns CSS value
 */
export const generateButtonColor = (variantProp, colorProp) => {
  if (colorProp) return colorProp.toLowerCase();
  if (variantProp) {
    if (variantProp.toLowerCase() === 'outline') return 'black';
    if (variantProp.toLowerCase() === 'filled') return 'white';
  }
  return 'white';
}

export const generateButtonFontSize = (sizeProp, fontSizeProp) => {
  if (fontSizeProp) return fontSizeProp.toLowerCase();
  if (sizeProp) {
    if (sizeProp.toLowerCase() === 'large') return '18px';
    if (sizeProp.toLowerCase() === 'medium') return '15px';
    if (sizeProp.toLowerCase() === 'small') return '12px';
  }
  return '15px';
}

export const generateButtonHoverBackgroundColor = (variantProp, hoverBackgroundColorProp) => {
  if (hoverBackgroundColorProp) return hoverBackgroundColorProp.toLowerCase();
  if (variantProp) {
    if (variantProp.toLowerCase() === 'outline') return 'black';
    if (variantProp.toLowerCase() === 'filled') return '#333';
  }
  return '#333'
}

export const generateButtonHoverBorderColor = (variantProp, hoverBackgroundColorProp, hoverBorderColorProp) => {
  if (hoverBorderColorProp) return hoverBorderColorProp.toLowerCase();
  if (hoverBackgroundColorProp) return hoverBackgroundColorProp.toLowerCase();
  if (variantProp) {
    if (variantProp === 'filled') return '#333'
    if (variantProp === 'outline') return 'black'
  };
  return '#333';
}

export const generateButtonHoverColor = (hoverColorProp) => hoverColorProp ? hoverColorProp.toLowerCase() : 'white';

export const generateButtonPadding = (sizeProp, paddingProp) => {
  if (paddingProp) return paddingProp.toLowerCase();
  if (sizeProp) {
    if (sizeProp.toLowerCase() === 'large') return '12px 30px'
    if (sizeProp.toLowerCase() === 'medium') return '8px 20px'
    if (sizeProp.toLowerCase() === 'small') return '6px 15px'
  }
  return '8px 20px'
}