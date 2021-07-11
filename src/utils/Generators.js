/**
 * @name generateClassNameString
 * @description Generates a className string from an object
 * @param {Object} cssModule CSS Module
 * @param {Object} stylesObj Styles object to reduce
 * @returns String - Classname
 */
export const generateClassNameString = (cssModule, stylesArr) => {
  let className = ''

  stylesArr?.forEach((style) => {
    className += ` ${cssModule[style]}`
  });

  return className.trim();
}