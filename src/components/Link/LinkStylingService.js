export const generateLinkColor = (props) => {
  // SETUP
  const color = props.color && props.color.toLowerCase();
  const theme = props.theme && props.theme.link

  // IMPORTANCE 1 --> EXACT
  if (color) return color.toLowerCase();

  // IMPORTANCE 2 --> GLOBAL
  if (
    theme &&
    theme.color
  ) return theme.color.toLowerCase();

  // DEFAULT
  return 'black'
}

export const generateLinkHoverColor = (props) => {
  // SETUP
  const color = props.color && props.color.toLowerCase();
  const hoverColor = props.hoverColor && props.hoverColor.toLowerCase();
  const theme = props.theme && props.theme.link

  // IMPORTANCE 1 --> HOVER COLOR
  if (hoverColor) return hoverColor

  // IMPORTANCE 2 --> (GLOBAL) HOVER COLOR
  if (
    theme &&
    theme.hoverColor
  ) return theme.hoverColor.toLowerCase();

  // IMPORTANCE 3 --> COLOR
  if (color) {
    switch (color) {
      case 'black': return '#666';
      case 'white': return '#ccc';
    }
  }

  // IMPORTANCE 4 --> (GLOBAL) COLOR
  if (
    theme &&
    theme.color
  ) switch (theme.color.toLowerCase()) {
    case 'black': return '#666'
    case 'white': return '#ccc'
  }

  // DEFAULT
  return '#666'
}

export const generateLinkFontSize = (props) => {
  // SETUP
  const size = props.size && props.size.toLowerCase();
  const fontSize = props.fontSize && props.fontSize.toLowerCase();
  const theme = props.theme && props.theme.link

  // IMPORTANCE 1 --> EXACT
  if (fontSize) return fontSize;

  // IMPORTANCE 2 --> SIZE
  switch (size) {
    case 'large': return '18px';
    case 'medium': return '16px';
    case 'small': return '14px';
  }

  // IMPORTANCE 3 --> GLOBAL
  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) FONT SIZE
    if (theme.fontSize) return theme.fontSize.toLowerCase()
    // IMPORTANCE 3.2 --> (GLOBAL) SIZE
    if (theme.size) {
      switch (theme.size.toLowerCase()) {
        case 'large': return '18px';
        case 'medium': return '16px';
        case 'small': return '14px';
      }
    }
  }

  // DEFAULT
  return '16px';
}

export const generateLinkFontWeight = (props) => {
  // SETUP
  const weight = props.weight && props.weight.toLowerCase();
  const theme = props.theme && props.theme.link

  // IMPORTANCE 1 --> EXACT 
  if (weight) return weight;

  // IMPORTANCE 2 --> GLOBALS
  if (
    theme &&
    theme.weight
  ) return theme.weight.toLowerCase();

  // DEFAULT
  return 300
}