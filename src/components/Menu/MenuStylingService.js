export const generateMenuChildDisplay = (directionProp) => {
  if (directionProp) {
    if (directionProp.toLowerCase() === 'horizontal') return 'inline'
    if (directionProp.toLowerCase() === 'vertical') return 'block'
  }
  return 'inline'
}

/**
 * @todo rewrite this documentation
 * @todo get the margins correct for each selector
 */
export const generateMenuChildMargin = (alignmentProp, childSelector) => {
  if (!alignmentProp) return '0px 2.5vw 0px 0px'
  if (alignmentProp === 'center') {
    if (childSelector === 'not-first-not-last') return '0px 1.25vw'
    if (childSelector === 'first') return '0px 1.25vw 0px 0px'
    if (childSelector === 'last') return '0px 0px 0px 1.25vw'
  }
  if (alignmentProp === 'right') return '0px 0px 0px 2.5vw'
  if (alignmentProp === 'left') return '0px 2.5vw 0px 0px'
  return '0px 2.5vw 0px 0px'
}

export const generateMenuJustifySelf = (alignmentProp) => {
  if (!alignmentProp) return 'start'
  if (alignmentProp === 'left') return 'start'
  if (alignmentProp === 'center') return 'center'
  if (alignmentProp === 'right') return 'end'
}