export const handleColorStyle = (colorProp="primary") => {
  if (!colorProp) return 'black'
  if (colorProp.toLowerCase() === 'primary') return 'black';
  if (colorProp.toLowerCase() === 'secondary') return 'white';
  return colorProp.toLowerCase()
}

export const handleHoverColorStyle = (colorProp="primary", hoverColorProp="#aaa") => {
  if (colorProp.toLowerCase() === 'primary') return '#aaa'
  if (colorProp.toLowerCase() === 'secondary') return '#aaa'
  return hoverColorProp.toLowerCase()
}

export const handleSizeStyle = (sizeProp="16px") => {
  return sizeProp.toLowerCase()
}

export const handleFontWeightStyle = (weightProp=300) => {
  return weightProp
}