export const handleBackgroundColorStyle = (backgroundColorProp) => {
  if (!backgroundColorProp) return 'white';
  return backgroundColorProp;
}

export const handleBoxShadowStyle = (shadowProp) => {
  if (shadowProp) return '0px 10px 15px -15px rgba(0,0,0,.4)'
}

export const handleMinHeightStyle = (sizeProp) => {
  if (!sizeProp) return '80px';
  if (sizeProp.toLowerCase() === 'large') return '100px';
  if (sizeProp.toLowerCase() === 'medium') return '70px';
  if (sizeProp.toLowerCase() === 'small') return '40px'; 
  return sizeProp.toLowerCase();
}

export const handleHeightStyle = (sizeProp) => {
  if (!sizeProp) return '7.5vh';
  if (sizeProp.toLowerCase() === 'large') return '10vh';
  if (sizeProp.toLowerCase() === 'medium') return '7.5vh';
  if (sizeProp.toLowerCase() === 'small') return '5vh';
  return sizeProp.toLowerCase();
}