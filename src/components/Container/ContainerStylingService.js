/**
 * @name generateBackgroundColorStyle
 * @description Converts the background color prop into a background color for the container
 * @param {String} backgroundColorProp Background color prop
 * @returns String - color
 */
export const generateContainerBackgroundColor = (backgroundColorProp) => {
  if (!backgroundColorProp) return 'white'
  return backgroundColorProp
}

export const generateContainerMaxWidth = (widthProp, maxWidthProp) => {
  if (maxWidthProp) return maxWidthProp.toLowerCase();
  if (widthProp) return widthProp.toLowerCase();
  return 'none';
}

/**
 * @name handleSizeStyle
 * @description Converts the height prop into a height for the contianer
 * @param {String} heightProp Height prop
 * @returns String height
 */
export const generateContainerMinHeight = (heightProp, minHeight) => {
  if (heightProp) return heightProp.toLowerCase();
  if (minHeight) return minHeight.toLowerCase();
  return 'none';
}

/**
 * @name handleWidthStyle
 * @description Converts the width prop into a width for the container
 * @param {String} widthProp Width prop
 * @returns String width
 */
export const generateContainerMinWidth = (widthProp, minWidthProp) => {
  if (minWidthProp) return minWidthProp.toLowerCase();
  if (widthProp) return widthProp.toLowerCase();
  return 'none';
}

export const generateContainerPadding = (sizeProp, paddingProp) => {
  if (paddingProp) return paddingProp.toLowerCase();
  if (sizeProp) {
    if (sizeProp === 'large') return '40px'
    if (sizeProp === 'medium') return '20px'
    if (sizeProp === 'small') return '10px'
  }
  return '20px'
}