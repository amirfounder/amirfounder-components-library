export const generateTextColor = (props) => {
  // SETUP
  const color = props.color && props.color.toLowerCase()
  const global = props.global && props.global.text

  // IMPORTANCE 1 --> EXACT
  if (color) return color

  // IMPORTANCE 2 --> GLOBAL
  if (
    global &&
    global.color
  ) return global.color.toLowerCase();

  // DEFAULT
  return 'black';
}

export const generateTextFontSize = () => {
  // SETUP
  const fontSize = props.fontSize && props.fontSize.toLowerCase();
  const size = props.size && props.size.toLowerCase();
  const global = props.global && props.global.text

  // IMPORTANCE 1 --> EXACT
  if (fontSize) return fontSize

  // IMPORTANCE 2 --> SIZE
  if (size) {
    switch(size) {
      case 'large': return '20px';
      case 'medium': return '16px';
      case 'small': return '12px';
    }
  }

  // IMPORTANCE 3 --> GLOBAL
  if (global) {
    if (global.fontSize) return global.fontSize.toLowerCase();
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

export const generateTextDisplay = (props) => {
  // SETUP
  const display = props.display && props.display.toLowerCase();
  const global = props.global && props.global.text;

  // IMPORTANCE 1 --> EXACT
  if (display) return display

  // IMPORTANCE 2 --> GLOBAL
  if (
    global &&
    global.display
  ) return global.display.toLowerCase();

  // NO DEFAULT
}