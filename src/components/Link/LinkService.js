export const handleColor = (colorProp) => {
  if (!colorProp) return 'black'
  if (!colorProp.toLowerCase() === 'primary') return 'black';
  if (!colorProp.toLowerCase() === 'secondary') return 'white';
  return colorProp.toLowerCase()
}

export const handleHoverColor = (colorProp) => {
  if (!colorProp) return '#aaa'
  if (!colorProp.toLowerCase() === 'primary') return '#aaa'
  if (!colorProp.toLowerCase() === 'secondary') return '#eee'
  return colorProp.toLowerCase()
}