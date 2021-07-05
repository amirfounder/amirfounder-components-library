/**
 * @name generateButtonBackgroundColor
 * @description Generates a value for the 'background-color' css property
 * @param {*} props Props
 * @prop variant
 * @prop backgroundColor
 * @prop global
 * @returns String
 */
export const generateButtonBackgroundColor = (props) => {
  // SETUP
  const variant = props.variant
  const backgroundColor = props.backgroundColor
  const global = props.global && props.global.button

  // IMPORTANCE 1 --> EXACT
  if (backgroundColor) return backgroundColor.toLowerCase();

  // IMPORTANCE 2 --> VARIANT
  if (variant) {
    if (variant.toLowerCase() === 'outline') {
      // IMPORTANCE 2.1 --> BACKGROUND COLOR
      if (backgroundColor) return backgroundColor.toLowerCase()
      // IMPORTANCE 2.2 --> (GLOBAL) BACKGROUND COLOR
      if (global && global.backgroundColor) return global.backgroundColor.toLowerCase()
      // DEFAULT
      return 'white'
    };
    if (variant.toLowerCase() === 'filled') {
      // IMPORTANCE 2.1 --> BACKGROUND COLOR
      if (backgroundColor) return backgroundColor.toLowerCase()
      // IMPORTANCE 2.2 --> (GLOBAL) BACKGROUND COLOR
      if (global && global.backgroundColor) return global.backgroundColor.toLowerCase()
      // DEFAULT
      return 'black'
    };
  }

  // IMPORTANCE 3 --> GLOBAL
  if (global) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (global.backgroundColor) return global.backgroundColor.toLowerCase();

    // IMPORTANCE 3.2 --> (GLOBAL) VARIANT
    if (global.variant) {
      if (global.variant.toLowerCase() === 'outline') {
        // IMPORTANCE 2.1 --> BACKGROUND COLOR
        if (backgroundColor) return backgroundColor.toLowerCase()
        // IMPORTANCE 2.2 --> (GLOBAL) BACKGROUND COLOR
        if (global.backgroundColor) return global.backgroundColor.toLowerCase()
        // DEFAULT
        return 'white'
      };
      if (global.variant.toLowerCase() === 'filled') {
        // IMPORTANCE 2.1 --> BACKGROUND COLOR
        if (backgroundColor) return backgroundColor.toLowerCase()
        // IMPORTANCE 2.2 --> (GLOBAL) BACKGROUND COLOR
        if (global.backgroundColor) return global.backgroundColor.toLowerCase()
        // DEFAULT
        return 'black'
      };
    }
  }

  // DEFAULT
  return 'black'
}

/**
 * @name generateButtonBorderColor
 * @description Generates a value for the 'border-color' css property
 * @param {*} props Props
 * @prop backgroundColor
 * @prop borderColor
 * @prop global
 * @returns String
 */
export const generateButtonBorderColor = (props) => {
  // SETUP
  const backgroundColor = props.backgroundColor
  const borderColor = props.borderColor
  const global = props.global && props.global.button

  // IMPORTANCE 1 --> EXACT
  if (borderColor) return borderColor.toLowerCase();

  // IMPORTANCE 2 --> MATCH BACKGROUND COLOR
  if (backgroundColor) return backgroundColor.toLowerCase();

  // IMPORTANCE 3 --> GLOBAL
  if (global) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (global.borderColor) return global.borderColor.toLowerCase();

    // IMPORTANCE 3.2 --> (GLOBAL) MATCH BACKGROUND COLOR
    if (global.backgroundColor) return global.backgroundColor.toLowerCase();
  }

  // DEFAULT
  return 'black'
}

/**
 * @name generateButtonColor
 * @description Generates a value for the 'color' css property
 * @param {*} props Props
 * @prop variant
 * @prop color
 * @prop global
 * @returns String
 */
export const generateButtonColor = (props) => {
  // SETUP
  const variant = props.variant
  const color = props.color
  const global = props.global && props.global.button

  // IMPORTANCE 1 --> EXACT
  if (color) return color.toLowerCase();

  // IMPORTANCE 2 --> VARIANT
  if (variant) {
    if (variant.toLowerCase() === 'outline') {
      // IMPORTANCE 2.1 --> COLOR
      if (color) return color.toLowerCase();
      // IMPORTANCE 2.2 --> (GLOBAL) COLOR
      if (global && global.color) return global.color.toLowerCase();
      // DEFAULT
      return 'black'
    }
    if (variant.toLowerCase() === 'filled') {
      // IMPORTANCE 2.1 --> COLOR
      if (color) return color.toLowerCase();
      // IMPORTANCE 2.2 --> (GLOBAL) COLOR
      if (global && global.color) return global.color.toLowerCase();
      // DEFAULT
      return 'white'
    }
  }

  // IMPORTANCE 3 --> GLOBAL
  if (global) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (global.color) return global.color.toLowerCase();

    // IMPORTANCE 3.2 --> (GLOBAL) VARIANT
    if (global.variant) {
      if (global.variant.toLowerCase() === 'outline') {
        // IMPORTANCE 3.2.1 --> COLOR
        if (color) return color.toLowerCase();
        // IMPORTANCE 3.2.2 --> (GLOBAL) COLOR
        if (global.color) return global.color.toLowerCase();
        // DEFAULT
        return 'black'
      };
      if (global.variant.toLowerCase() === 'filled') {
        // IMPORTANCE 3.2.1 --> COLOR
        if (color) return color.toLowerCase();
        // IMPORTANCE 3.2.2 --> (GLOBAL) COLOR
        if (global.color) return global.color.toLowerCase();
        // DEFAULT
        return 'white'
      };
    }
  }

  // DEFAULT
  return 'white';
}

/**
 * @name generateButtonFontSize
 * @description Generates a value for the 'font-size' css property
 * @param {*} props Props
 * @prop size
 * @prop fontSize
 * @prop global
 * @returns String
 */
export const generateButtonFontSize = (props) => {
  // SETUP
  const size = props.size
  const fontSize = props.fontSize
  const global = props.global && props.global.button

  // IMPORTANCE 1 --> EXACT 
  if (fontSize) return fontSize.toLowerCase();

  // IMPORTANCE 2 --> SIZE
  if (size) {
    if (size.toLowerCase() === 'large') return '18px';
    if (size.toLowerCase() === 'medium') return '15px';
    if (size.toLowerCase() === 'small') return '12px';
  }

  // IMPORTANCE 3 --> GLOBAL
  if (global) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (global.fontSize) return global.fontSize.toLowerCase();

    // IMPORTANCE 3.2 --> (GLOBAL) SIZE
    if (global.size) {
      if (global.size.toLowerCase() === 'large') return '18px';
      if (global.size.toLowerCase() === 'medium') return '15px';
      if (global.size.toLowerCase() === 'small') return '12px';
    }
  }

  // DEFAULT
  return '15px';
}

/**
 * @name generateButtonHoverBackgroundColor
 * @description Generates a value for the 'background-color' css property for the :hover pseudo element
 * @param {*} props Props
 * @prop variant
 * @prop hoverBackgroundColor
 * @prop global
 * @returns String
 */
export const generateButtonHoverBackgroundColor = (props) => {
  // SETUP
  const variant = props.variant
  const hoverBackgroundColor = props.hoverBackgroundColor
  const global = props.global && props.global.button

  // IMPORTANCE 1 --> EXACT
  if (hoverBackgroundColor) return hoverBackgroundColor.toLowerCase();

  // IMPORTANCE 2 --> VARIANT
  if (variant) {
    if (variant.toLowerCase() === 'outline') return 'black';
    if (variant.toLowerCase() === 'filled') return '#333';
  }

  // IMPORTANCE 3 --> GLOBAL
  if (global) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (
      global.hover &&
      global.hover.backgroundColor
    ) return global.hover.backgroundColor.toLowerCase();

    // IMPORTANCE 3.2 --> (GLOBAL) VARIANT
    if (global.variant) {
      if (global.variant.toLowerCase() === 'outline') return 'black';
      if (global.variant.toLowerCase() === 'filled') return '#333';
    }
  }

  // DEFAULT
  return '#333'
}

/**
 * @name generateButtonHoverBorderColor
 * @description Generates a value for the 'border-color' css property for the :hover pseudo element
 * @param {*} props Props
 * @prop variant
 * @prop hoverBackgroundColor
 * @prop hoverBorderColor
 * @prop global
 * @returns String
 */
export const generateButtonHoverBorderColor = (props) => {
  // SETUP
  const variant = props.variant
  const hoverBackgroundColor = props.hoverBackgroundColor
  const hoverBorderColor = props.hoverBorderColor
  const global = props.global && props.global.button

  // IMPORTANCE 1 --> EXACT
  if (hoverBorderColor) return hoverBorderColor.toLowerCase();

  // IMPORTANCE 2 --> VARIANT
  if (variant) {
    if (variant === 'filled') return '#333'
    if (variant === 'outline') return 'black'
  };

  // IMPORTANCE 3 --> MATCH HOVER BACKGROUND COLOR
  if (hoverBackgroundColor) return hoverBackgroundColor.toLowerCase();

  // IMPORTANCE 4 --> GLOBAL
  if (global) {
    // IMPORTANCE 4.1 --> (GLOBAL) EXACT
    if (
      global.hover &&
      global.hover.borderColor
    ) return global.hover.borderColor.toLowerCase();

    // IMPORTANCE 4.2 --> (GLOBAL) VARIANT
    if (global.variant) {
      if (global.variant === 'filled') return '#333'
      if (global.variant === 'outline') return 'black'
    }

    // IMPORTANCE 4.3 --> (GLOBAL) MATCH HOVER BACKGROUND COLOR
    if (
      global.hover &&
      global.hover.backgroundColor
    ) return global.hover.backgroundColor.toLowerCase();
  }

  // DEFAULT
  return '#333';
}

/**
 * @name generateButtonHoverColor
 * @description Generates a value for the 'color' css property for the :hover pseudo element
 * @param {*} props Props
 * @prop hoverColor
 * @prop global
 * @returns String
 */
export const generateButtonHoverColor = (props) => {
  // SETUP
  const hoverColor = props.hoverColor
  const global = props.global && props.global.button

  // IMPORTANCE 1 --> EXACT
  if (hoverColor) return hoverColor.toLowerCase();

  // IMPORTANCE 2 --> GLOBAL
  if (
    global &&
    global.hover &&
    global.hover.color
  ) return global.hover.color.toLowerCase();

  // DEFAULT  
  return 'white';
}

/**
 * @name generateButtonPadding
 * @description Generates a value for the 'padding' css property
 * @param {*} props Props
 * @prop size
 * @prop padding
 * @prop global
 * @returns String
 */
export const generateButtonPadding = (props) => {
  // SETUP 
  const size = props.size
  const padding = props.padding
  const global = props.global && props.global.button

  // IMPORTANCE 1 --> EXACT
  if (padding) return padding.toLowerCase();

  // IMPORTANCE 2 --> SIZE
  if (size) {
    if (size.toLowerCase() === 'large') return '12px 30px'
    if (size.toLowerCase() === 'medium') return '8px 20px'
    if (size.toLowerCase() === 'small') return '6px 15px'
  }

  // IMPORTANCE 3 --> GLOBAL
  if (global) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (
      global.hover &&
      global.hover.padding
    ) return global.hover.padding.toLowerCase();

    // IMPORTANCE 3.2 --> (GLOBAL) SIZE
    if (global.size) {
      if (global.size.toLowerCase() === 'large') return '12px 30px'
      if (global.size.toLowerCase() === 'medium') return '8px 20px'
      if (global.size.toLowerCase() === 'small') return '6px 15px'
    }
  }

  // DEFAULT
  return '8px 20px'
}