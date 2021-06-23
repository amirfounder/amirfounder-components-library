/**
 * @todo LEVERAGE TYPE PROP TO GENERATE WIDTHS AS WELL
 * @param {*} widthProp 
 * @param {*} paddingProp 
 * @param {*} sizeProp 
 * @returns 
 */
export const generateInputWidth = (sizeProp, widthProp, paddingProp) => {
  if (widthProp) return widthProp.toLowerCase();
  if (sizeProp) {
    if (sizeProp === 'large') return `calc(100% - 30px)`
    if (sizeProp === 'medium') return `calc(100% - 20px)`
    if (sizeProp === 'small') return `calc(100% - 10px)`
  }
  if (paddingProp) {
    const paddingPropArr = paddingProp.split(' ')
    if (paddingPropArr.length === 4) return `calc(100% - ${paddingPropArr[1]} - ${paddingPropArr[3]})`
    if (paddingPropArr.length === 2) return `calc(100% - ${paddingPropArr[1]})`
    if (paddingPropArr.length === 1) return `calc(100% - ${paddingPropArr[0]}`
  }
  return `calc(100% - 20px)`
}

export const generateInputPadding = (sizeProp, paddingProp) => {
  if (paddingProp) return paddingProp.toLowerCase();
  if (sizeProp) {
    if (sizeProp === 'large') return '15px'
    if (sizeProp === 'medium') return '10px'
    if (sizeProp === 'small') return '5px'
  };
  return '10px';
}

export const generateInputLineHeight = (sizeProp, lineHeightProp) => {
  if (lineHeightProp) return lineHeightProp.toLowerCase();
  if (sizeProp) {
    if (sizeProp === 'large') return '1.4em'
    if (sizeProp === 'medium') return '1.2em'
    if (sizeProp === 'small') return '1.0em'
  }
  return '1.2em'
}

export const generateInputFontSize = (sizeProp, fontSizeProp) => {
  if (fontSizeProp) return fontSizeProp.toLowerCase();
  if (sizeProp) {
    if (sizeProp === 'large') return '20px'
    if (sizeProp === 'medium') return '16px'
    if (sizeProp === 'small') return '12px'
  }
  return '16px'
}