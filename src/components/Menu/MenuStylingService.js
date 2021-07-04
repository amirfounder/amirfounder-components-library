export const generateMenuChildDisplay = (props) => {
  const direction = props.direction && props.direction.toLowerCase();

  switch (direction) {
    case 'vertical': return 'block'
    case 'horizonta':
    default: return 'inline'
  }
}

export const generateMenuChildMargin = (props, childSelector) => {
  const direction = props.direction && props.direction.toLowerCase();
  if (direction === 'horizontal') {
    switch (childSelector) {
      case 'not-first-not-last': return '0px 1.5vw';
      case 'first': return '0px 1.5vw 0px 0px';
      case 'last': return '0px 0px 0px 1.5vw';
      default: return '0px 1.5vw 0px 0px'
    }
  }
}

export const generateMenuJustifySelf = (props) => {
  const alignment = props.alignment && props.alignment.toLowerCase();
  if (alignment) {
    switch (alignment) {
      case 'start':
      case 'left':
        return 'start';
      case 'center':
        return 'center';
      case 'end':
      case 'right':
        return 'end'
      default:
        return 'center'
    }
  }
}