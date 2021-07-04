/**
 * @name generateBackgroundColorStyle
 * @description Converts the background color  into a background color for the container
 * @param {String} backgroundColor Background color 
 * @returns String - color
 */
export const generateContainerBackgroundColor = (props) => {
  // SETUP
  const backgroundColor = props.backgroundColor
  const global = props.global && props.global.container

  // IMPORTANCE 1 --> EXACT
  if (backgroundColor) return backgroundColor.toLowerCase();

  // IMPORTANCE 2 --> GLOBAL
  if (
    global &&
    global.backgroundColor
  ) return global.backgroundColor.toLowerCase();

  // DEFAULT
  return 'white';
}

export const generateContainerMaxHeight = (props) => {
  const maxHeight = props.maxWidth
  const global = props.global && props.global.container

  // IMPORTANCE 1 --> EXACT
  if (maxHeight) return maxHeight.toLowerCase();

  // IMPORTANCE 2 --> GLOBAL
  if (
    global &&
    global.maxHeight
  ) return global.maxHeight.toLowerCase()

  // NO DEFAULT
}

export const generateContainerMaxWidth = (props) => {
  // SETUP
  const maxWidth = props.maxWidth && props.maxWidth.toLowerCase();
  const global = props.global && props.global.container

  // IMPORTANCE 1 --> EXACT
  if (maxWidth) return maxWidth;

  // IMPORTANCE 2 --> GLOBAL
  if (
    global &&
    global.maxWidth
  ) return global.maxWidth.toLowerCase()

  // NO DEFAULT
}

/**
 * @name handleSizeStyle
 * @description Converts the height  into a height for the contianer
 * @param {String} height Height 
 * @returns String height
 */
export const generateContainerMinHeight = (props) => {
  // SETUP
  const minHeight = props.minHeight
  const global = props.global && props.global.container

  // IMPORTANCE 1 --> EXACT
  if (minHeight) return minHeight.toLowerCase();

  // IMPORTANCE 2 --> GLOBAL
  if (
    global &&
    global.minHeight
  ) return global.minHeight.toLowerCase();

  // NO DEFAULT
}

/**
 * @name handleWidthStyle
 * @description Converts the width  into a width for the container
 * @param {String} width Width 
 * @returns String width
 */
export const generateContainerMinWidth = (props) => {
  // SETUP
  const minWidth = props.minWidth
  const global = props.global && props.global.minWidth

  // IMPORTANCE 1 --> EXACT
  if (minWidth) return minWidth.toLowerCase();

  // IMPORTANCE 2 --> GLOBAL
  if (
    global && 
    global.minWidth
  ) return global.minWidth.toLowerCase();

  // NO DEFAULT
}

export const generateContainerMargin = (props) => {
  // SETUP
  const margin = props.margin && props.margin.toLowerCase();
  const global = props.global && props.global.container

  // IMPORTANCE 1 --> EXACT
  if (margin) return margin;

  // IMPORTANCE 2 --> GLOBAL
  if (
    global &&
    global.margin
  ) return global.margin.toLowerCase();

  // DEFAULT
  return '0px'
}

export const generateContainerPadding = (props) => {
  // SETUP
  const padding = props.padding
  const size = props.size
  const global = props.global && props.global.container

  // IMPORTANCE 1 --> EXACT
  if (padding) return padding.toLowerCase();

  // IMPORTANCE 2 --> SIZE
  if (size) {
    if (size === 'large') return '40px'
    if (size === 'medium') return '20px'
    if (size === 'small') return '10px'
  }

  // IMPORTANCE 3 --> GLOBAL
  if (global) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (global.padding) return global.padding.toLowerCase();
    
    // IMPORTANCE 3.2 --> (GLOBAL) SIZE
    if (global.size) {
      if (global.size === 'large') return '40px'
      if (global.size === 'medium') return '20px'
      if (global.size === 'small') return '10px'
    }
  }

  // DEFAULT
  return '20px'
}