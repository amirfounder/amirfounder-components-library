/**
 * @name handleColumnsStyle
 * @description Converts column prop into a grid template column string
 * @param {String} columns columns prop
 * @param {HTMLElement(s)} children either an HTML element or collection of such prop
 * @returns String - grid template columns
 */
export const handleColumnsStyle = (columnsProp, childrenProp) => {
  if (!columnsProp) {
    if (!childrenProp.length) return '1fr'
    if (childrenProp.length > 1) return `repeat(${childrenProp.length}, minmax(100px, 1fr))`
  }
  const columnsArr = columnsProp.split(' ')
  let returnValue = '';
  for (const column of columnsArr) {
    if (column.includes('fr')) returnValue += `${column} `
    if (!column.includes('fr') && Number(num) != NaN) returnValue += `${column}fr `
  }
  return returnValue.trim()
}

export const handleVerticalAlignmentStyle = (verticalAlignmentProp) => {
  if (!verticalAlignmentProp) return 'center'
  return verticalAlignmentProp
}

export const handleVerticalPaddingStyle = (verticalPaddingProp) => {
  if (!verticalPaddingProp) return '0px'
  return verticalPaddingProp
}

export const handleHorizontalPaddingStyle = (horizontalPaddingProp) => {
  if (!horizontalPaddingProp) return '0px'
  return horizontalPaddingProp
}

export const handleHeightStyle = (heightProp) => {
  if (!heightProp) return '0vh'
  return heightProp
}

export const handleBackgroundColorStyle = (backgroundColorProp) => {
  if (!backgroundColorProp) return 'white'
  return backgroundColorProp
}