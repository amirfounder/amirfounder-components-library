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

export const generateContainerPadding = (sizeProp, paddingProp) => {
  if (paddingProp) return paddingProp.toLowerCase();
  if (sizeProp) {
    if (sizeProp === 'large') return '40px'
    if (sizeProp === 'medium') return '20px'
    if (sizeProp === 'small') return '10px'
  }
  return '20px'
}

/**
 * @name handleSizeStyle
 * @description Converts the height prop into a height for the contianer
 * @param {String} heightProp Height prop
 * @returns String height
 */
export const generateContainerHeight = (heightProp) => heightProp ? heightProp.toLowerCase() : 'none';

/**
 * @name handleWidthStyle
 * @description Converts the width prop into a width for the container
 * @param {String} widthProp Width prop
 * @returns String width
 */
export const generateContainerWidth = (widthProp) => widthProp ? widthProp.toLowerCase() : 'none';