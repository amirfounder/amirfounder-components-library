export const generateMenuJustifySelf = (props) => {
  // SETUP
  const alignment = props.alignment && props.alignment.toLowerCase();
  const theme = props.theme && props.theme.menu;

  // IMPORTANCE 1 --> EXACT
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

  // IMPORTANCE 2 --> GLOBAL
  if (
    theme &&
    theme.alignment
  ) switch (theme.alignment) {
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

  // NO DEFAULT
}

export const generateMenuBackgroundColor = (props) => {
  // SETUP
  const backgroundColor = props.backgroundColor && props.backgroundColor.toLowerCase();
  const theme = props.theme && props.theme.menu;

  // IMPORTANCE 1 -> EXACT
  if (backgroundColor) return backgroundColor;

  // IMPORTANCE 2 -> THEME
  if (
    theme &&
    theme.backgroundColor
  ) return theme.backgroundColor.toLowerCase();

  // NO DEFAULT
}

// MENU ITEM

export const generateMenuItemDisplay = (props) => {
  // SETUP
  const display = props.childDisplay && props.childDisplay.toLowerCase();
  const direction = props.direction && props.direction.toLowerCase();
  const theme = props.theme && props.theme.menu;

  // IMPORTANCE 1 -> EXACT
  if (display) return display.toLowerCase();

  // IMPORTANCE 2 -> ABSTRACT
  if (direction) {
    switch (direction) {
      case 'vertical': return 'block'
      case 'horizontal': return 'inline-block'
    }
  }

  // IMPORTANCE 3 -> GLOBAL
  if (theme) {
    // IMPORTANCE 3.1 -> (GLOBAL) EXACT
    if (theme.childDisplay) return theme.childDisplay.toLowerCase();
    // IMPORTANCE 3.2 -> (GLOBAL) ABSTRACT
    if (theme.direction) {
      switch (theme.direction.toLowerCase()) {
        case 'vertical': return 'block'
        case 'horizontal': return 'inline-block'
      }
    }
  }

  // DEFAULT
  return 'inline-block'
}

export const generateMenuItemPadding = (props) => {
  // SETUP
  const padding = props.childPadding && props.childPadding.toLowerCase();
  const theme = props.theme && props.theme.menu

  // IMPORTANCE 1 --> EXACT
  if (padding) return padding;

  // IMPORTANCE 2 --> GLOBALS
  if (
    theme &&
    theme.childPadding
  ) return theme.childPadding.toLowerCase();

  // NO DEFAULT
}

export const generateMenuItemMargin = (props, childSelector) => {
  // SETUP
  const direction = props.direction && props.direction.toLowerCase();
  const spaceBetween = props.spaceBetween && props.spaceBetween.toLowerCase();
  const theme = props.theme && props.theme.menu

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
      // IMPORTANCE 1 --> EXACT
      if (spaceBetween) return `0px ${spaceBetween}`
      // IMPORTANCE 2 --> GLOBAL
      if (theme && theme.spaceBetween) return `0px ${theme.spaceBetween}`
      return '0px 1.5vw';

    // IF CHILD ELEMENT IS FIRST
    case 'first':
      // IMPORTANCE 1 --> EXACT
      if (spaceBetween) return `0px ${spaceBetween} 0px 0px`
      // IMPORTANCE 2 --> GLOBAL
      if (theme && theme.spaceBetween) return `0px ${theme.spaceBetween} 0px 0px`
      return '0px 1.5vw 0px 0px';

    // IF CHILD ELEMENT IS LAST
    case 'last':
      // IMPORTANCE 1 --> EXACT
      if (spaceBetween) return `0px 0px 0px ${spaceBetween}`
      // IMPORTANCE 2 --> GLOBAL
      if (theme && theme.spaceBetween) return `0px 0px 0px ${theme.spaceBetween}`
      return '0px 0px 0px 1.5vw';

    // ELSE --> ASSUME ONLY ELEMENT
    default:
      return '0vw'
  }

  // NO DEFAULT
}