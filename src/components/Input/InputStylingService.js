export const generateInputWidth = (props) => {
  // SETUP
  const width = props.width && props.width.toLowerCase();
  const size = props.size && props.size.toLowerCase();
  const padding = props.padding
  const global = props.global && props.global.input

  // IMPORTANCE LEVEL 1 --> EXACT
  if (width) {
    // IMPORTANCE LEVEL 1.1 --> PADDING
    if (padding) return `calc(${width} - ${getHorizontalPadding(padding)})`
    // DEFAULT
    return width
  };

  // IMPORTANCE LEVEL 2 --> PADDING
  if (padding) return `calc(100% - ${getHorizontalPadding(padding)})`

  // IMPORTANCE LEVEL 3 --> SIZE
  if (size) {
    switch (size.toLowerCase()) {
      case 'large': return `calc(100% - 30px)`
      case 'medium': return `calc(100% - 20px)`
      case 'small': return `calc(100% - 10px)` 
    }
  }

  // IMPORTANCE LEVEL 4 --> GLOBAL
  if (global) {
    // IMPORTANCE LEVEL 4.1 --> (GLOBAL) WIDTH
    if (global.width) {
      // IMPORTANCE LEVEL 4.1.1 --> (GLOBAL) WIDTH AND (GLOBAL) PADDING
      if (global.padding) return `calc(${global.width} - ${getHorizontalPadding(global.padding)})`
      // IMPORTANCE LEVEL 4.1.2 --> (GLOBAL) WIDTH AND PADDING
      if (padding) return `calc(${global.width} - ${getHorizontalPadding(padding)})`
      // DEFAULT
      return global.width
    };

    // IMPORTANCE LEVEL 4.2 --> (GLOBAL) PADDING
    if (global.padding) `calc(100% - ${getHorizontalPadding(global.padding)})`
    
    // IMPORTANCE LEVEL 4.3 --> (GLOBAL) SIZE
    if (global.size) {
      switch (global.size.toLowerCase()) {
        case 'large': return `calc(100% - 30px)`
        case 'medium': return `calc(100% - 20px)`
        case 'small': return `calc(100% - 10px)` 
      }
    }
  }

  // DEFAULT
  return `calc(100% - 20px)`
}

export const generateInputPadding = (props) => {
  // SETUP
  const size = props.size && props.size.toLowerCase();
  const padding = props.padding && props.padding.toLowerCase();
  const global = props.global && props.global.input

  // IMPORTANCE LEVEL 1 --> EXACT
  if (padding) return padding.toLowerCase();

  // IMPORTANCE LEVEL 2 --> SIZE
  if (size) {
    if (size === 'large') return '15px'
    if (size === 'medium') return '10px'
    if (size === 'small') return '5px'
  };
  
  // IMPORTANCE LEVEL 3 --> GLOBAL
  if (global) {
    // IMPORTANCE LEVEL 3.1 --> (GLOBAL) PADDING
    if (global.padding) return global.padding.toLowerCase();
    // IMPORTANCE LEVEL 3.2 --> (GLOBAL) SIZE
    if (global.size) {
      if (global.size.toLowerCase() === 'large') return '15px'
      if (global.size.toLowerCase() === 'medium') return '10px'
      if (global.size.toLowerCase() === 'small') return '5px'
    }
  }

  // DEFAULT
  return '10px';
}

export const generateInputLineHeight = (props) => {
  // SETUP
  const size = props.size && props.size.toLowerCase();
  const lineHeight = props.lineHeight && props.lineHeight.toLowerCase();
  const global = props.global && props.global.input

  // IMPORTANCE LEVEL 1 --> EXACT
  if (lineHeight) return lineHeight.toLowerCase();

  // IMPORTANCE LEVEL 2 --> SIZE
  switch (size) {
    case 'large': return '1.4em'
    case 'medium': return '1.2em'
    case 'small': return '1em'
  }

  // IMPORTANCE LEVEL 3 --> GLOBAL
  if (global) {
    // IMPORTANCE LEVEL 3.1 --> (GLOBAL) EXACT
    if (global.lineHeight) return global.lineHeight.toLowerCase();
    // IMPORTANCE LEVEL 3.2 --> (GLOBAL) SIZE
    if (global.size) {
      switch (global.size) {
        case 'large': return '1.4em'
        case 'medium': return '1.2em'
        case 'small': return '1em'
      }
    }
  }
  
  // DEFAULT
  return '1.2em'
}

export const generateInputFontSize = (props) => {
  // SETUP
  const size = props.size && props.size.toLowerCase();
  const fontSize = props.fontSize && props.fontSize.toLowerCase();
  const global = props.global && props.global.input

  // IMPORTANCE LEVEL 1 --> EXACT
  if (fontSize) return fontSize.toLowerCase();

  // IMPORTANCE LEVEL 2 --> SIZE
  if (size) {
    if (size === 'large') return '20px'
    if (size === 'medium') return '16px'
    if (size === 'small') return '12px'
  }
  
  // IMPORTANCE LEVEL 3 --> GLOBAL
  if (global) {
    // IMPORTANCE LEVEL 3.1 --> (GLOBAL) FONT SIZE
    if (global.fontSize) return global.fontSize.toLowerCase();
    // IMPORTANCE LEVEL 3.2 --> (GLOBAL) SIZE
    if (global.size) {
      switch (global.size.toLowerCase()) {
        case 'large': return '20px';
        case 'medium': return '16px';
        case 'small': return '12px';
      }
    }
  }

  // DEFAULT
  return '16px'
}