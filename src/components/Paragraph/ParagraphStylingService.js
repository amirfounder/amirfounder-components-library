export const generateParagraphFontSize = (sizeProp, fontSizeProp) => {
  if (fontSizeProp) return fontSizeProp.toLowerCase();
  if (sizeProp) {
    if (sizeProp.toLowerCase() === 'large') return '18px';
    if (sizeProp.toLowerCase() === 'medium') return '16px';
    if (sizeProp.toLowerCase() === 'small') return '14px';
  }
  return '16px'
}

export const generateParagraphFontWeight = (fontWeightProp) => fontWeightProp ? fontWeightProp.toLowerCase() : 300

export const generateParagraphLineHeight = (lineHeightProp) => lineHeightProp ? lineHeightProp.toLowerCase() : '1.7em'