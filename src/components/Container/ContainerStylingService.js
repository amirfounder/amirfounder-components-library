/**
 * @name generateBackgroundColorStyle
 * @description Converts the background color  into a background color for the container
 * @param {String} backgroundColor Background color 
 * @returns String - color
 */
export const generateContainerBackgroundColor = (props) => {
  // SETUP
  const backgroundColor = props.backgroundColor
  const theme = props.theme && props.theme.container

  // IMPORTANCE 1 --> EXACT
  if (backgroundColor) return backgroundColor.toLowerCase();

  // IMPORTANCE 2 --> GLOBAL
  if (
    theme &&
    theme.backgroundColor
  ) return theme.backgroundColor.toLowerCase();

  // DEFAULT
  return 'white';
}

export const generateContainerMaxHeight = (props) => {
  const maxHeight = props.maxWidth
  const theme = props.theme && props.theme.container

  // IMPORTANCE 1 --> EXACT
  if (maxHeight) return maxHeight.toLowerCase();

  // IMPORTANCE 2 --> GLOBAL
  if (
    theme &&
    theme.maxHeight
  ) return theme.maxHeight.toLowerCase()

  // NO DEFAULT
}

export const generateContainerMaxWidth = (props) => {
  // SETUP
  const maxWidth = props.maxWidth && props.maxWidth.toLowerCase();
  const theme = props.theme && props.theme.container

  // IMPORTANCE 1 --> EXACT
  if (maxWidth) return maxWidth;

  // IMPORTANCE 2 --> GLOBAL
  if (
    theme &&
    theme.maxWidth
  ) return theme.maxWidth.toLowerCase()

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
  const theme = props.theme && props.theme.container

  // IMPORTANCE 1 --> EXACT
  if (minHeight) return minHeight.toLowerCase();

  // IMPORTANCE 2 --> GLOBAL
  if (
    theme &&
    theme.minHeight
  ) return theme.minHeight.toLowerCase();

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
  const theme = props.theme && props.theme.minWidth

  // IMPORTANCE 1 --> EXACT
  if (minWidth) return minWidth.toLowerCase();

  // IMPORTANCE 2 --> GLOBAL
  if (
    theme && 
    theme.minWidth
  ) return theme.minWidth.toLowerCase();

  // NO DEFAULT
}

export const generateContainerMargin = (props) => {
  // SETUP
  const margin = props.margin && props.margin.toLowerCase();
  const theme = props.theme && props.theme.container

  // IMPORTANCE 1 --> EXACT
  if (margin) return margin;

  // IMPORTANCE 2 --> GLOBAL
  if (
    theme &&
    theme.margin
  ) return theme.margin.toLowerCase();

  // DEFAULT
  return '0px'
}

export const generateContainerPadding = (props) => {
  // SETUP
  const padding = props.padding
  const size = props.size
  const theme = props.theme && props.theme.container

  // IMPORTANCE 1 --> EXACT
  if (padding) return padding.toLowerCase();

  // IMPORTANCE 2 --> SIZE
  if (size) {
    if (size === 'large') return '40px'
    if (size === 'medium') return '20px'
    if (size === 'small') return '10px'
  }

  // IMPORTANCE 3 --> GLOBAL
  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (theme.padding) return theme.padding.toLowerCase();
    
    // IMPORTANCE 3.2 --> (GLOBAL) SIZE
    if (theme.size) {
      if (theme.size === 'large') return '40px'
      if (theme.size === 'medium') return '20px'
      if (theme.size === 'small') return '10px'
    }
  }

  // DEFAULT
  return '20px'
}