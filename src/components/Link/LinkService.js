export const handleColorStyle = (colorProp="primary") => {
  if (!colorProp) return 'black'
  if (colorProp.toLowerCase() === 'primary') return 'black';
  if (colorProp.toLowerCase() === 'secondary') return 'white';
  return colorProp.toLowerCase()
}

export const handleHoverColorStyle = (colorProp="primary", hoverColorProp) => {
  if (!hoverColorProp) {
    if (colorProp.toLowerCase() === 'primary') return '#666'
    if (colorProp.toLowerCase() === 'secondary') return '#ccc'
    return '#666'
  }
  if (colorProp.toLowerCase() === 'primary') return '#666'
  if (colorProp.toLowerCase() === 'secondary') return '#ccc'
  return hoverColorProp.toLowerCase()
}

export const handleSizeStyle = (sizeProp="16px") => {
  return sizeProp.toLowerCase()
}

export const handleFontWeightStyle = (weightProp=300) => {
  return weightProp
}