/**
 * @name generateBackgroundColorStyle
 * @description Converts user inputted background color into a useable format for styled component
 * @param {String} backgroundColor Background color. Either String or RGBA format
 * @returns String
 */
export const generateBackgroundColorStyle = (backgroundColor) => {
  if (!backgroundColor) return 'rgba(0,0,0,.3)'
  return backgroundColor
}