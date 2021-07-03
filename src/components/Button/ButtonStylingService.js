export const generateButtonBorderColor = (backgroundColorProp, borderColorProp, global) => {
  // IMPORTANCE LEVEL 1 --> EXACT VALUE
  if (borderColorProp) return borderColorProp.toLowerCase();

  // IMPORTANCE LEVEL 2 --> ABSTRACTED VALUE
  if (backgroundColorProp) return backgroundColorProp.toLowerCase();

  // IMPORTANCE LEVEL 3 --> GLOBAL STYLES
  if (global && global.button) {
    if (global.button.borderColor) return global.button.borderColor.toLowerCase();
    if (global.button.backgroundColor) return global.button.backgroundColor.toLowerCase();
  }
  
  // DEFAULT
  return 'black'
}

export const generateButtonBackgroundColor = (variantProp, backgroundColorProp, global) => {
  // IMPORTANCE LEVEL 1 --> EXACT VALUE
  if (backgroundColorProp) return backgroundColorProp.toLowerCase();
  
  // IMPORTANCE LEVEL 2 --> ABSTRACTED VALUES
  if (variantProp) {
    if (variantProp.toLowerCase() === 'outline') return 'white';
    if (variantProp.toLowerCase() === 'filled') return 'black';
  }

  // IMPORTANCE LEVEL 3 --> GLOBAL STYLES
  if (global && global.button.backgroundColor) return global.button.backgroundColor.toLowerCase();

  // DEFAULT
  return 'black'
}

/**
 * @name generateButtonColor
 * @description Generates CSS styles for the button text
 * @param {String} variantProp Variant
 * @param {Strign} colorProp Color
 * @returns CSS value
 */
export const generateButtonColor = (variantProp, colorProp, global) => {
  // IMPORTANCE LEVEL 1 --> EXACT VALUE
  if (colorProp) return colorProp.toLowerCase();

  // IMPORTANCE LEVEL 2 --> ABSTRACTED VALUES
  if (variantProp) {
    if (variantProp.toLowerCase() === 'outline') return 'black';
    if (variantProp.toLowerCase() === 'filled') return 'white';
  }

  // IMPORTANCE LEVEL 3 --> GLOBAL STYLES
  if (global && global.button.color) return global.button.color.toLowerCase();

  // DEFAULT
  return 'white';
}

export const generateButtonFontSize = (sizeProp, fontSizeProp, global) => {
  // IMPORTANCE LEVEL 1 --> EXACT VALUE
  if (fontSizeProp) return fontSizeProp.toLowerCase();

  // IMPORTANCE LEVEL 2 --> ABSTRACTED VALUES
  if (sizeProp) {
    if (sizeProp.toLowerCase() === 'large') return '18px';
    if (sizeProp.toLowerCase() === 'medium') return '15px';
    if (sizeProp.toLowerCase() === 'small') return '12px';
  }

  // IMPORTANCE LEVEL 3 --> GLOBAL STYLES

  // IF GLOBAL STYLES IS PRESENT AND HAS BUTTONFONTSIZE PROPERTY
  if (global && global.button.fontSize) {

    // CHECK ABSTRACTED VALUES
    if (global.button.fontSize.toLowerCase() === 'large') return '18px';
    if (global.button.fontSize.toLowerCase() === 'medium') return '15px';
    if (global.button.fontSize.toLowerCase() === 'small') return '12px';
    
    // CHECK EXACT VALUE
    if (global.button.fontSize) return global.button.fontSize
  }

  // DEFAULT
  return '15px';
}

export const generateButtonHoverBackgroundColor = (variantProp, hoverBackgroundColorProp, global) => {
  // IMPORTANCE LEVEL 1 --> EXACT VALUE
  if (hoverBackgroundColorProp) return hoverBackgroundColorProp.toLowerCase();

  // IMPORTANCE LEVEL 2 --> ABSTRACT VALUES
  if (variantProp) {
    if (variantProp.toLowerCase() === 'outline') return 'black';
    if (variantProp.toLowerCase() === 'filled') return '#333';
  }

  // IMPORTANCE LEVEL 3 --> GLOBAL STYLES
  if (global && global.button.backgroundColor) return global.button.backgroundColor.toLowerCase();

  // DEFAULT
  return '#333'
}

export const generateButtonHoverBorderColor = (variantProp, hoverBackgroundColorProp, hoverBorderColorProp) => {
  // IMPORTANCE LEVEL 1 --> EXACT VALUE
  if (hoverBorderColorProp) return hoverBorderColorProp.toLowerCase();

  // IMPORTANCE LEVEL 2 --> ABSTRACT VALUES
  if (variantProp) {
    if (variantProp === 'filled') return '#333'
    if (variantProp === 'outline') return 'black'
  };
  
  // IMPORTANCE LEVEL 3 --> VALUE FROM HOVERBACKGROUNDCOLOR
  if (hoverBackgroundColorProp) return hoverBackgroundColorProp.toLowerCase();

  // IMPORTANCE LEVEL 4 --> GLOBAL STYLES
  if (global && global) {
    if (global.hoverBorderColor) return 
  }
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