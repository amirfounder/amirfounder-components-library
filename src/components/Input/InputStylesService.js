/**
 * @todo LEVERAGE TYPE PROP TO GENERATE WIDTHS AS WELL
 * @param {*} widthProp 
 * @param {*} paddingProp 
 * @param {*} sizeProp 
 * @returns 
 */
export const generateInputWidth = (widthProp, sizeProp, paddingProp) => {
  if (widthProp) return widthProp.toLowerCase();
  
  // LEVERAGE SIZE PROP
  if (sizeProp) {
    if (sizeProp === 'large') return `calc(100% - 40px)`
    if (sizeProp === 'medium') return `calc(100% - 20px)`
    if (sizeProp === 'small') return `calc(100% - 10px)`
  }
  
  // LEVERAGE PADDING PROP
  if (paddingPropArr) {
    const paddingPropArr = paddingProp.split(' ')
    if (paddingPropArr.length === 4) return `calc(100% - ${paddingPropArr[1]} - ${paddingPropArr[3]})`
    if (paddingPropArr.length === 2) return `calc(100% - ${paddingPropArr[1]})`
    if (paddingPropArr.length === 1) return `calc(100% - ${paddingPropArr[0]}`
  }

  // DEFAULT VALUE
  return `calc(100% - 20px)`
}