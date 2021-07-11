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
  if (typeof (classes) === 'object') classesArr = classes
  if (typeof (classes) === 'string') classesArr = classes?.split(' ')


  classesArr?.forEach((style) => {
    className += ` ${cssModule[style]}`
  });

  return className.trim();
}

/**
 * @name setCustomVariable
 * @description Helper method to set a CSS Variable
 * @param {Element} root Node to attache CSS proverty
 * @param {String} property Name of the CSS Variable
 * @param {String} value Name of the CSS Variable value
 */
export const setCustomVariable = (root, property, value) => {
  root.style.setProperty(property, value)
}
