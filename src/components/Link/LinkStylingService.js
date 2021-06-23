export const generateLinkColor = (colorProp) => colorProp ? colorProp.toLowerCase() : 'black';

export const generateLinkHoverColor = (colorProp, hoverColorProp) => {
  if (hoverColorProp) return hoverColorProp.toLowerCase();
  if (colorProp) {
    if (colorProp.toLowerCase() === 'black') return '#666'
    if (colorProp.toLowerCase() === 'white') return '#ccc'
  }
  return '#666'
}

export const generateLinkFontSize = (sizeProp, fontSizeProp) => {
  if (fontSizeProp) return fontSizeProp.toLowerCase();
  if (sizeProp) {
    if (sizeProp.toLowerCase() === 'large') return '18px';
    if (sizeProp.toLowerCase() === 'medium') return '16px';
    if (sizeProp.toLowerCase() === 'small') return '14px';
  }
  return '16px';
}

export const generateLinkFontWeight = (weightProp) => weightProp ? weightProp.toLowerCase() : 300