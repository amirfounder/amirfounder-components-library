export const generateMenuChildDisplay = (props) => {
  // SETUP
  const direction = props.direction && props.direction.toLowerCase();
  const global = props.global && props.global.toLowerCase();

  // IMPORTANCE LEVEL 1 --> EXACT
  if (direction) {
    switch (direction) {
      case 'vertical': return 'block'
      case 'horizontal':
      default: return 'inline'
    }
  }

  // IMPORTANCE LEVEL 2 --> GLOBAL
  if (
    global &&
    global.direction
  ) switch (global.direction.toLowerCase()) {
    case 'vertical': return 'block'
    case 'horizontal':
    default: return 'inline'
  }

  // DEFAULT
  return 'inline'
}

export const generateMenuDirectChildPadding = (props) => {
  // SETUP
  const padding = props.padding && props.padding.toLowerCase();
  const global = props.global && props.global.menu

  // IMPORTANCE LEVEL 1 --> EXACT
  if (padding) return padding;

  // IMPORTANCE LEVEL 2 --> GLOBALS
  if (
    global &&
    global.padding
  ) return global.padding.toLowerCase();

  // DEFAULT
  return '0px'
}

export const generateMenuDirectChildMargin = (props, childSelector) => {
  // SETUP
  const direction = props.direction && props.direction.toLowerCase();
  const spaceBetween = props.spaceBetween && props.spaceBetween.toLowerCase();
  const global = props.global && props.global.menu

  // IF HORIZONTAL
  if (
    !direction ||
    direction === 'horizontal'
  ) switch (childSelector) {

    // IF CHILD IS ONLY CHILD ELEMENT
    case 'only':
      return '0vw';

    // IF CHILD ELEMENT IS NOT FIRST NOR LAST
    case 'not-first-not-last':
      // IMPORTANCE LEVEL 1 --> EXACT
      if (spaceBetween) return `0px ${spaceBetween}`
      // IMPORTANCE LEVEL 2 --> GLOBAL
      if (global && global.spaceBetween) return `0px ${global.spaceBetween}`
      return '0px 1.5vw';

    // IF CHILD ELEMENT IS FIRST
    case 'first':
      // IMPORTANCE LEVEL 1 --> EXACT
      if (spaceBetween) return `0px ${spaceBetween} 0px 0px`
      // IMPORTANCE LEVEL 2 --> GLOBAL
      if (global && global.spaceBetween) return `0px ${global.spaceBetween} 0px 0px`
      return '0px 1.5vw 0px 0px';

    // IF CHILD ELEMENT IS LAST
    case 'last':
      // IMPORTANCE LEVEL 1 --> EXACT
      if (spaceBetween) return `0px 0px 0px ${spaceBetween}`
      // IMPORTANCE LEVEL 2 --> GLOBAL
      if (global && global.spaceBetween) return `0px 0px 0px ${global.spaceBetween}`
      return '0px 0px 0px 1.5vw';

    // ELSE --> ASSUME ONLY ELEMENT
    default:
      return '0vw'
  }

  // DEFAULT
  return '0vw'
}

export const generateMenuJustifySelf = (props) => {
  // SETUP
  const alignment = props.alignment && props.alignment.toLowerCase();
  const global = props.global && props.global.toLowerCase();

  // IMPORTANCE LEVEL 1 --> EXACT
  if (alignment) {
    switch (alignment) {
      // IF START OR LEFT
      case 'start':
      case 'left':
        return 'start';
      // IF CENTER
      case 'center':
        return 'center';
      // IF END OR RIGHT
      case 'end':
      case 'right':
        return 'end'
      // ELSE ASSUME START
      default:
        return 'start'
    }
  }

  // IMPORTANCE LEVEL 2 --> GLOBAL
  if (
    global &&
    global.alignment
  ) switch (global.alignment) {
    // IF START OR LEFT
    case 'start':
    case 'left':
      return 'start';
    // IF CENTER
    case 'center':
      return 'center';
    // IF END OR RIGHT
    case 'end':
    case 'right':
      return 'end'
    // ELSE ASSUME START
    default:
      return 'start'
  }

  // DEFAULT
  return 'start'
}