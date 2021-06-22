export const generateHeaderBackgroundColorStyle = (backgroundColorProp) => backgroundColorProp ? backgroundColorProp.toLowerCase() : 'white'

export const generateHeaderBoxShadow = (shadowProp) => shadowProp && '0px 10px 15px rgba(0,0,0,0.25)'

export const generateHeaderMaxHeight = (sizeProp, maxHeightProp) => {
  if (maxHeightProp) return maxHeightProp.toLowerCase();
  if (sizeProp) {
    if (sizeProp.toLowerCase() === 'large') return '130px';
    if (sizeProp.toLowerCase() === 'medium') return '100px';
    if (sizeProp.toLowerCase() === 'small') return '170px';
  }
  return '100px'
}

export const generateHeaderMinHeight = (sizeProp, minHeightProp) => {
  if (minHeightProp) return minHeightProp.toLowerCase();
  if (sizeProp) {
    if (sizeProp.toLowerCase() === 'large') return '100px';
    if (sizeProp.toLowerCase() === 'medium') return '70px';
    if (sizeProp.toLowerCase() === 'small') return '40px'; 
  }
  return '80px';
}

export const generateHeaderHeight = (sizeProp, heightProp) => {
  if (heightProp) return heightProp.toLowerCase();
  if (sizeProp) {
    if (sizeProp.toLowerCase() === 'large') return '10vh';
    if (sizeProp.toLowerCase() === 'medium') return '7vh';
    if (sizeProp.toLowerCase() === 'small') return '5vh';
  }
  return '7vh';
}