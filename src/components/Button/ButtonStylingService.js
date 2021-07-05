/**
 * @name generateButtonBackgroundColor
 * @description Generates a value for the 'background-color' css property
 * @param {*} props Props
 * @prop variant
 * @prop backgroundColor
 * @prop theme
 * @returns String
 */
export const generateButtonBackgroundColor = (props) => {
  // SETUP
  const variant = props.variant
  const backgroundColor = props.backgroundColor
  const theme = props.theme && props.theme.button

  // IMPORTANCE 1 --> EXACT
  if (backgroundColor) return backgroundColor.toLowerCase();

  // IMPORTANCE 2 --> VARIANT
  if (variant) {
    if (variant.toLowerCase() === 'outline') {
      // IMPORTANCE 2.1 --> BACKGROUND COLOR
      if (backgroundColor) return backgroundColor.toLowerCase()
      // IMPORTANCE 2.2 --> (GLOBAL) BACKGROUND COLOR
      if (theme && theme.backgroundColor) return theme.backgroundColor.toLowerCase()
      // DEFAULT
      return 'white'
    };
    if (variant.toLowerCase() === 'filled') {
      // IMPORTANCE 2.1 --> BACKGROUND COLOR
      if (backgroundColor) return backgroundColor.toLowerCase()
      // IMPORTANCE 2.2 --> (GLOBAL) BACKGROUND COLOR
      if (theme && theme.backgroundColor) return theme.backgroundColor.toLowerCase()
      // DEFAULT
      return 'black'
    };
  }

  // IMPORTANCE 3 --> GLOBAL
  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (theme.backgroundColor) return theme.backgroundColor.toLowerCase();

    // IMPORTANCE 3.2 --> (GLOBAL) VARIANT
    if (theme.variant) {
      if (theme.variant.toLowerCase() === 'outline') {
        // IMPORTANCE 2.1 --> BACKGROUND COLOR
        if (backgroundColor) return backgroundColor.toLowerCase()
        // IMPORTANCE 2.2 --> (GLOBAL) BACKGROUND COLOR
        if (theme.backgroundColor) return theme.backgroundColor.toLowerCase()
        // DEFAULT
        return 'white'
      };
      if (theme.variant.toLowerCase() === 'filled') {
        // IMPORTANCE 2.1 --> BACKGROUND COLOR
        if (backgroundColor) return backgroundColor.toLowerCase()
        // IMPORTANCE 2.2 --> (GLOBAL) BACKGROUND COLOR
        if (theme.backgroundColor) return theme.backgroundColor.toLowerCase()
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
 * @prop theme
 * @returns String
 */
export const generateButtonBorderColor = (props) => {
  // SETUP
  const backgroundColor = props.backgroundColor
  const borderColor = props.borderColor
  const theme = props.theme && props.theme.button

  // IMPORTANCE 1 --> EXACT
  if (borderColor) return borderColor.toLowerCase();

  // IMPORTANCE 2 --> MATCH BACKGROUND COLOR
  if (backgroundColor) return backgroundColor.toLowerCase();

  // IMPORTANCE 3 --> GLOBAL
  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (theme.borderColor) return theme.borderColor.toLowerCase();

    // IMPORTANCE 3.2 --> (GLOBAL) MATCH BACKGROUND COLOR
    if (theme.backgroundColor) return theme.backgroundColor.toLowerCase();
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
 * @prop theme
 * @returns String
 */
export const generateButtonColor = (props) => {
  // SETUP
  const variant = props.variant
  const color = props.color
  const theme = props.theme && props.theme.button

  // IMPORTANCE 1 --> EXACT
  if (color) return color.toLowerCase();

  // IMPORTANCE 2 --> VARIANT
  if (variant) {
    if (variant.toLowerCase() === 'outline') {
      // IMPORTANCE 2.1 --> COLOR
      if (color) return color.toLowerCase();
      // IMPORTANCE 2.2 --> (GLOBAL) COLOR
      if (theme && theme.color) return theme.color.toLowerCase();
      // DEFAULT
      return 'black'
    }
    if (variant.toLowerCase() === 'filled') {
      // IMPORTANCE 2.1 --> COLOR
      if (color) return color.toLowerCase();
      // IMPORTANCE 2.2 --> (GLOBAL) COLOR
      if (theme && theme.color) return theme.color.toLowerCase();
      // DEFAULT
      return 'white'
    }
  }

  // IMPORTANCE 3 --> GLOBAL
  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (theme.color) return theme.color.toLowerCase();

    // IMPORTANCE 3.2 --> (GLOBAL) VARIANT
    if (theme.variant) {
      if (theme.variant.toLowerCase() === 'outline') {
        // IMPORTANCE 3.2.1 --> COLOR
        if (color) return color.toLowerCase();
        // IMPORTANCE 3.2.2 --> (GLOBAL) COLOR
        if (theme.color) return theme.color.toLowerCase();
        // DEFAULT
        return 'black'
      };
      if (theme.variant.toLowerCase() === 'filled') {
        // IMPORTANCE 3.2.1 --> COLOR
        if (color) return color.toLowerCase();
        // IMPORTANCE 3.2.2 --> (GLOBAL) COLOR
        if (theme.color) return theme.color.toLowerCase();
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
 * @prop theme
 * @returns String
 */
export const generateButtonFontSize = (props) => {
  // SETUP
  const size = props.size
  const fontSize = props.fontSize
  const theme = props.theme && props.theme.button

  // IMPORTANCE 1 --> EXACT 
  if (fontSize) return fontSize.toLowerCase();

  // IMPORTANCE 2 --> SIZE
  if (size) {
    if (size.toLowerCase() === 'large') return '18px';
    if (size.toLowerCase() === 'medium') return '15px';
    if (size.toLowerCase() === 'small') return '12px';
  }

  // IMPORTANCE 3 --> GLOBAL
  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (theme.fontSize) return theme.fontSize.toLowerCase();

    // IMPORTANCE 3.2 --> (GLOBAL) SIZE
    if (theme.size) {
      if (theme.size.toLowerCase() === 'large') return '18px';
      if (theme.size.toLowerCase() === 'medium') return '15px';
      if (theme.size.toLowerCase() === 'small') return '12px';
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
 * @prop theme
 * @returns String
 */
export const generateButtonHoverBackgroundColor = (props) => {
  // SETUP
  const variant = props.variant
  const hoverBackgroundColor = props.hoverBackgroundColor
  const theme = props.theme && props.theme.button

  // IMPORTANCE 1 --> EXACT
  if (hoverBackgroundColor) return hoverBackgroundColor.toLowerCase();

  // IMPORTANCE 2 --> VARIANT
  if (variant) {
    if (variant.toLowerCase() === 'outline') return 'black';
    if (variant.toLowerCase() === 'filled') return '#333';
  }

  // IMPORTANCE 3 --> GLOBAL
  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (
      theme.hover &&
      theme.hover.backgroundColor
    ) return theme.hover.backgroundColor.toLowerCase();

    // IMPORTANCE 3.2 --> (GLOBAL) VARIANT
    if (theme.variant) {
      if (theme.variant.toLowerCase() === 'outline') return 'black';
      if (theme.variant.toLowerCase() === 'filled') return '#333';
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
 * @prop theme
 * @returns String
 */
export const generateButtonHoverBorderColor = (props) => {
  // SETUP
  const variant = props.variant
  const hoverBackgroundColor = props.hoverBackgroundColor
  const hoverBorderColor = props.hoverBorderColor
  const theme = props.theme && props.theme.button

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
  if (theme) {
    // IMPORTANCE 4.1 --> (GLOBAL) EXACT
    if (
      theme.hover &&
      theme.hover.borderColor
    ) return theme.hover.borderColor.toLowerCase();

    // IMPORTANCE 4.2 --> (GLOBAL) VARIANT
    if (theme.variant) {
      if (theme.variant === 'filled') return '#333'
      if (theme.variant === 'outline') return 'black'
    }

    // IMPORTANCE 4.3 --> (GLOBAL) MATCH HOVER BACKGROUND COLOR
    if (
      theme.hover &&
      theme.hover.backgroundColor
    ) return theme.hover.backgroundColor.toLowerCase();
  }

  // DEFAULT
  return '#333';
}

/**
 * @name generateButtonHoverColor
 * @description Generates a value for the 'color' css property for the :hover pseudo element
 * @param {*} props Props
 * @prop hoverColor
 * @prop theme
 * @returns String
 */
export const generateButtonHoverColor = (props) => {
  // SETUP
  const hoverColor = props.hoverColor
  const theme = props.theme && props.theme.button

  // IMPORTANCE 1 --> EXACT
  if (hoverColor) return hoverColor.toLowerCase();

  // IMPORTANCE 2 --> GLOBAL
  if (
    theme &&
    theme.hover &&
    theme.hover.color
  ) return theme.hover.color.toLowerCase();

  // DEFAULT  
  return 'white';
}

/**
 * @name generateButtonPadding
 * @description Generates a value for the 'padding' css property
 * @param {*} props Props
 * @prop size
 * @prop padding
 * @prop theme
 * @returns String
 */
export const generateButtonPadding = (props) => {
  // SETUP 
  const size = props.size
  const padding = props.padding
  const theme = props.theme && props.theme.button

  // IMPORTANCE 1 --> EXACT
  if (padding) return padding.toLowerCase();

  // IMPORTANCE 2 --> SIZE
  if (size) {
    if (size.toLowerCase() === 'large') return '12px 30px'
    if (size.toLowerCase() === 'medium') return '8px 20px'
    if (size.toLowerCase() === 'small') return '6px 15px'
  }

  // IMPORTANCE 3 --> GLOBAL
  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (
      theme.hover &&
      theme.hover.padding
    ) return theme.hover.padding.toLowerCase();

    // IMPORTANCE 3.2 --> (GLOBAL) SIZE
    if (theme.size) {
      if (theme.size.toLowerCase() === 'large') return '12px 30px'
      if (theme.size.toLowerCase() === 'medium') return '8px 20px'
      if (theme.size.toLowerCase() === 'small') return '6px 15px'
    }
  }

  // DEFAULT
  return '8px 20px'
}