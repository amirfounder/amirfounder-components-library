export const generateLogoFontSize = (sizeProp, fontSizeProp) => {
  if (fontSizeProp) return fontSizeProp.toLowerCase();
  if (sizeProp) {
    if (sizeProp.toLowerCase() === 'small') return '14px'
    if (sizeProp.toLowerCase() === 'medium') return '18px'
    if (sizeProp.toLowerCase() === 'large') return '22px'
  }
  return '18px'
}

export const generateLogoColor = (colorProp) => colorProp ? colorProp.toLowerCase() : 'black'