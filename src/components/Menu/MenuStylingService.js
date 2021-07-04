export const generateMenuChildDisplay = (props) => {
  // SETUP
  const direction = props.direction && props.direction.toLowerCase();
  const global = props.global && props.global.toLowerCase();

  // IMPORTANCE LEVEL 1 --> EXACT
  if (direction) {
    switch (direction) {
      case 'vertical': return 'block'
      case 'horizonta':
      default: return 'inline'
    }
  }

  // IMPORTANCE LEVEL 2 --> GLOBAL
  if (
    global &&
    global.direction
  ) switch (global.direction.toLowerCase()) {
    case 'vertical': return 'block'
    case 'horizonta':
    default: return 'inline'
  }

  // DEFAULT
  return 'inline'
}

export const generateMenuChildMargin = (props, childSelector) => {
  // SETUP
  const alignment = props.alignment && props.alignment.toLowerCase();
  const direction = props.direction && props.direction.toLowerCase();
  const spacing = props.spacing && props.spacing.toLowerCase();
  const children = props.children;
  const global = props.global && props.global.menu

  // VALIDATE CHILDREN LENGTH
  if (children[1].length >= 2) {
    
    // VALIDATE DIRECTION
    if (direction === 'horizontal') {

      switch (childSelector) {

        // IF CHILD ELEMENT IS NOT FIRST NOR LAST
        case 'not-first-not-last':
          // IMPORTANCE LEVEL 1 --> EXACT
          if (spacing) return `0px ${spacing}`
          // IMPORTANCE LEVEL 2 --> GLOBAL
          if (global && global.spacing) return `0px ${global.spacing}` 
          return '0px 1.5vw';

        // IF CHILD ELEMENT IS FIRST
        case 'first':
          // IMPORTANCE LEVEL 1 --> EXACT
          if (spacing) return `0px ${spacing} 0px 0px`
          // IMPORTANCE LEVEL 2 --> GLOBAL
          if (global && global.spacing) return `0px ${global.spacing} 0px 0px`
          return '0px 1.5vw 0px 0px';

        // IF CHILD ELEMENT IS LAST
        case 'last':
          // IMPORTANCE LEVEL 1 --> EXACT
          if (spacing) return `0px 0px 0px ${spacing}`
          // IMPORTANCE LEVEL 2 --> GLOBAL
          if (global && global.spacing) return `0px 0px 0px ${global.spacing}`
          return '0px 0px 0px 1.5vw';
        
        // ELSE --> ASSUME FIRST
        default:
        return '0px 1.5vw 0px 0px'
      }
    }
  }

  return '0vw'
}

export const generateMenuJustifySelf = (props) => {
  // SETUP
  const alignment = props.alignment && props.alignment.toLowerCase();

  // IMPORTANCE LEVEL 1 --> EXACT
  if (alignment) {
    switch (alignment) {
      case 'start':
      case 'left': return 'start';
      case 'center': return 'center';
      case 'end':
      case 'right': return 'end'
      default: return 'start'
    }
  }

  // IMPORTANCE LEVEL 2 --> GLOBAL
  if (
    global &&
    global.alignment
  ) switch (global.alignment) {
    case 'start':
    case 'left': return 'start';
    case 'center': return 'center';
    case 'end':
    case 'right': return 'end'
    default: return 'start'
  }

  // DEFAULT
  return 'start'
}