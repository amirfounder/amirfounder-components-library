export const generateInputWidth = (props) => {
  // SETUP
  const width = props.width && props.width.toLowerCase();
  const size = props.size && props.size.toLowerCase();
  const padding = props.padding
  const theme = props.theme && props.theme.input

  // IMPORTANCE 1 --> EXACT
  if (width) {
    // IMPORTANCE 1.1 --> PADDING
    if (padding) return `calc(${width} - ${getHorizontalPadding(padding)})`
    // DEFAULT
    return width
  };

  // IMPORTANCE 2 --> PADDING
  if (padding) return `calc(100% - ${getHorizontalPadding(padding)})`

  // IMPORTANCE 3 --> SIZE
  if (size) {
    switch (size.toLowerCase()) {
      case 'large': return `calc(100% - 30px)`
      case 'medium': return `calc(100% - 20px)`
      case 'small': return `calc(100% - 10px)` 
    }
  }

  // IMPORTANCE 4 --> GLOBAL
  if (theme) {
    // IMPORTANCE 4.1 --> (GLOBAL) WIDTH
    if (theme.width) {
      // IMPORTANCE 4.1.1 --> (GLOBAL) WIDTH AND (GLOBAL) PADDING
      if (theme.padding) return `calc(${theme.width} - ${getHorizontalPadding(theme.padding)})`
      // IMPORTANCE 4.1.2 --> (GLOBAL) WIDTH AND PADDING
      if (padding) return `calc(${theme.width} - ${getHorizontalPadding(padding)})`
      // DEFAULT
      return theme.width
    };

    // IMPORTANCE 4.2 --> (GLOBAL) PADDING
    if (theme.padding) `calc(100% - ${getHorizontalPadding(theme.padding)})`
    
    // IMPORTANCE 4.3 --> (GLOBAL) SIZE
    if (theme.size) {
      switch (theme.size.toLowerCase()) {
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
  const theme = props.theme && props.theme.input

  // IMPORTANCE 1 --> EXACT
  if (padding) return padding.toLowerCase();

  // IMPORTANCE 2 --> SIZE
  if (size) {
    if (size === 'large') return '15px'
    if (size === 'medium') return '10px'
    if (size === 'small') return '5px'
  };
  
  // IMPORTANCE 3 --> GLOBAL
  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) PADDING
    if (theme.padding) return theme.padding.toLowerCase();
    // IMPORTANCE 3.2 --> (GLOBAL) SIZE
    if (theme.size) {
      if (theme.size.toLowerCase() === 'large') return '15px'
      if (theme.size.toLowerCase() === 'medium') return '10px'
      if (theme.size.toLowerCase() === 'small') return '5px'
    }
  }

  // DEFAULT
  return '10px';
}

export const generateInputLineHeight = (props) => {
  // SETUP
  const size = props.size && props.size.toLowerCase();
  const lineHeight = props.lineHeight && props.lineHeight.toLowerCase();
  const theme = props.theme && props.theme.input

  // IMPORTANCE 1 --> EXACT
  if (lineHeight) return lineHeight.toLowerCase();

  // IMPORTANCE 2 --> SIZE
  switch (size) {
    case 'large': return '1.4em'
    case 'medium': return '1.2em'
    case 'small': return '1em'
  }

  // IMPORTANCE 3 --> GLOBAL
  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (theme.lineHeight) return theme.lineHeight.toLowerCase();
    // IMPORTANCE 3.2 --> (GLOBAL) SIZE
    if (theme.size) {
      switch (theme.size) {
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
  const theme = props.theme && props.theme.input

  // IMPORTANCE 1 --> EXACT
  if (fontSize) return fontSize.toLowerCase();

  // IMPORTANCE 2 --> SIZE
  if (size) {
    if (size === 'large') return '20px'
    if (size === 'medium') return '16px'
    if (size === 'small') return '12px'
  }
  
  // IMPORTANCE 3 --> GLOBAL
  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) FONT SIZE
    if (theme.fontSize) return theme.fontSize.toLowerCase();
    // IMPORTANCE 3.2 --> (GLOBAL) SIZE
    if (theme.size) {
      switch (theme.size.toLowerCase()) {
        case 'large': return '20px';
        case 'medium': return '16px';
        case 'small': return '12px';
      }
    }
  }

  // DEFAULT
  return '16px'
}