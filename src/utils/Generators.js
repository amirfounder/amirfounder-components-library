/**
 * @name generateClassNameString
 * @description Generates a className string from an object
 * @param {Object} cssModule CSS Module
 * @param {Object} stylesObj Styles object to reduce
 * @returns String - Classname
 */
export const generateClassNameString = (cssModule, classes) => {
  let classesArr;
  let className = ''

  if (!classes) return
  if (typeof(classes) === 'object') classesArr = classes
  if (typeof(classes) === 'string') classesArr = classes?.split(' ')


  classesArr?.forEach((style) => {
    className += ` ${cssModule[style]}`
  });

  return className.trim();
}