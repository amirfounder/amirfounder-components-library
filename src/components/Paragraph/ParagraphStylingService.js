export const generateParagraphFontSize = (props) => {
  // SETUP
  const size = props.size && props.size.toLowerCase();
  const fontSize = props.fontSize && props.fontSize.toLowerCase();
  const theme = props.theme && props.theme.paragraph

  // IMPORTANCE 1 --> EXACT
  if (fontSize) return fontSize.toLowerCase();

  // IMPORTANCE 2 --> SIZE
  if (size) {
    if (size.toLowerCase() === 'large') return '18px';
    if (size.toLowerCase() === 'medium') return '16px';
    if (size.toLowerCase() === 'small') return '14px';
  }
  
  // IMPORTANCE 3 --> GLOBAL
  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
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

export const generateParagraphFontWeight = (props) => {
  // SETUP
  const fontWeight = props.fontWeight && props.fontWeight.toLowerCase();
  const theme = props.theme && props.theme.paragraph

  // IMPORTANCE 1 --> EXACT
  if (fontWeight) return fontWeight;

  // IMPORTANCE 2 --> GLOBAL
  if (
    theme &&
    theme.fontWeight
  ) return theme.fontWeight.toLowerCase();

  // DEFAULT
  return 300
}

export const generateParagraphLineHeight = (props) => {
  // SETUP
  const lineHeight = props.lineHeight && props.lineHeight.toLowerCase();
  const theme = props.theme && props.theme.paragraph

  // IMPORTANCE 1 --> EXACT
  if (lineHeight) return lineHeight;

  // IMPORTANCE 2 --> GLOBAL
  if (
    theme &&
    theme.lineHeight
  ) return theme.lineHeight.toLowerCase();

  // DEFAULT
  return '1.8em'
}