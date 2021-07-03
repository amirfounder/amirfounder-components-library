export const generateLogoFontSize = (props) => {
  // SETUP
  const fontSize = props.fontSize && props.fontSize.toLowerCase();
  const size = props.size && props.size.toLowerCase();

  // IMPORTANCE LEVEL 1 --> EXACT
  if (fontSize) return fontSize.toLowerCase();

  // IMPORTANCE LEVEL 2 --> SIZE
  if (size) {
    switch (size.toLowerCase()) {
      case 'large': return '20px';
      case 'medium': return '16px';
      case 'small': return '14px';
    }
  }

  // IMPORTANCE LEVEL 3 --> GLOBAL
  if (global) {
    // IMPORTANCE LEVEL 3.1 --> (GLOBAL) EXACT
    if (global.fontSize) return global.fontSize.toLowerCase();
    // IMPORTANCE LEVEL 3.2 --> (GLOBAL) SIZE
    if (global.size) {
      switch (global.size.toLowerCase()) {
        case 'large': return '20px';
        case 'medium': return '16px';
        case 'small': return '14px';
      }
    }
  }

  // DEFAULT
  return '18px'
}

export const generateLogoColor = (props) => {
  // SETUP
  const color = props.color && props.color.toLowerCase();
  const global = props.global && props.global.logo

  // IMPORTANCE LEVEL 1 --> EXACT
  if (color) return color;

  // IMPORTANCE LEVEL 2 --> GLOBAL
  if (
    global &&
    global.color
  ) return global.color

  // DEFAULT
  return 'black'
}