export const generateParagraphFontSize = (props) => {
  // SETUP
  const size = props.size && props.size.toLowerCase();
  const fontSize = props.fontSize && props.fontSize.toLowerCase();
  const global = props.global && props.global.paragraph

  // IMPORTANCE 1 --> EXACT
  if (fontSize) return fontSize.toLowerCase();

  // IMPORTANCE 2 --> SIZE
  if (size) {
    if (size.toLowerCase() === 'large') return '18px';
    if (size.toLowerCase() === 'medium') return '16px';
    if (size.toLowerCase() === 'small') return '14px';
  }
  
  // IMPORTANCE 3 --> GLOBAL
  if (global) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (global.fontSize) return global.fontSize.toLowerCase();
    // IMPORTANCE 3.2 --> (GLOBAL) SIZE
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

export const generateParagraphFontWeight = (props) => {
  // SETUP
  const fontWeight = props.fontWeight && props.fontWeight.toLowerCase();
  const global = props.global && props.global.paragraph

  // IMPORTANCE 1 --> EXACT
  if (fontWeight) return fontWeight;

  // IMPORTANCE 2 --> GLOBAL
  if (
    global &&
    global.fontWeight
  ) return global.fontWeight.toLowerCase();

  // DEFAULT
  return 300
}

export const generateParagraphLineHeight = (props) => {
  // SETUP
  const lineHeight = props.lineHeight && props.lineHeight.toLowerCase();
  const global = props.global && props.global.paragraph

  // IMPORTANCE 1 --> EXACT
  if (lineHeight) return lineHeight;

  // IMPORTANCE 2 --> GLOBAL
  if (
    global &&
    global.lineHeight
  ) return global.lineHeight.toLowerCase();

  // DEFAULT
  return '1.8em'
}