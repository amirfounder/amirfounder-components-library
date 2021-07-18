/**
 * @name generateClassNameString
 * @description Generates a className string from an object
 * @param {Object} cssModule CSS Module
 * @param {Object} stylesObj Styles object to reduce
 * @returns String - Classname
 */
export const generateClassNameString = (cssModule, classes) => {
  let
    classesArr,
    className = ''

  if (!classes) return
  if (typeof (classes) === 'object') classesArr = classes
  if (typeof (classes) === 'string') classesArr = classes?.split(' ')


  classesArr?.forEach((style) => {
    className += ` ${cssModule[style]}`
  });

  return className.trim();
}

/**
 * @name generateGradient
 * @description Generates a gradient value
 * @param {*} gradientColors String or array of color gradients
 * @param {String} gradientDirection direction of the gradient
 * @returns String
 */
export const generateGradient = (gradientColors, gradientDirection) => {
  let gradientArr;
  
  if (!gradientColors) return
  if (typeof(gradientColors) === 'object') gradientArr = gradientColors
  if (typeof(gradientColors) === 'string') gradientArr = gradientColors?.split(',')
  
  if (gradientArr.length == 0) return
  if (gradientArr.length == 1) gradientArr = [...gradientArr, ...gradientArr]

  gradientArr.forEach((gradient, index, arr) => arr[index] = gradient.trim());

  if (gradientDirection) gradientArr.unshift(gradientDirection)

  return gradientArr.join(', ')
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
