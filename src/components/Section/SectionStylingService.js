/**
 * @name handleColumnsStyle
 * @description Converts column prop into a grid template column string
 * @param {String} columns columns prop
 * @param {HTMLElement(s)} children either an HTML element or collection of such prop
 * @returns String - grid template columns
 */
export const generateSectionGridTemplateColumns = (columnsProp, childrenProp) => {
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

export const generateSectionAlignItems = (verticalAlignmentProp) => {
  if (!verticalAlignmentProp) return 'center'
  return verticalAlignmentProp
}

export const generateSectionPadding = (paddingProp) => paddingProp ? paddingProp.toLowerCase() : '0px'

export const generateSectionHeight = (heightProp) => heightProp ? heightProp.toLowerCase() : '0px'

export const generateBackgroundColor = (backgroundColorProp) => {
  if (!backgroundColorProp) return 'white'
  return backgroundColorProp
}