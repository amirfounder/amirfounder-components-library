export const handleFontSizeStyle = (fontSizeProp, defaultFontSize) => {
  if (!fontSizeProp) return defaultFontSize;
  if (fontSizeProp.toLowerCase() === 'large') return '20px';
  if (fontSizeProp.toLowerCase() === 'medium') return defaultFontSize;
  if (fontSizeProp.toLowerCase() === 'small') return '12px';
  return fontSizeProp.toLowerCase();
}