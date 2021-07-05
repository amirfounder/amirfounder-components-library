export const generateTextColor = (props) => {
  // SETUP
  const color = props.color && props.color.toLowerCase()
  const theme = props.theme && props.theme.text

  // IMPORTANCE 1 --> EXACT
  if (color) return color

  // IMPORTANCE 2 --> GLOBAL
  if (
    theme &&
    theme.color
  ) return theme.color.toLowerCase();

  // DEFAULT
  return 'black';
}

export const generateTextFontSize = () => {
  // SETUP
  const fontSize = props.fontSize && props.fontSize.toLowerCase();
  const size = props.size && props.size.toLowerCase();
  const theme = props.theme && props.theme.text

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
  if (theme) {
    if (theme.fontSize) return theme.fontSize.toLowerCase();
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

export const generateTextDisplay = (props) => {
  // SETUP
  const display = props.display && props.display.toLowerCase();
  const theme = props.theme && props.theme.text;

  // IMPORTANCE 1 --> EXACT
  if (display) return display

  // IMPORTANCE 2 --> GLOBAL
  if (
    theme &&
    theme.display
  ) return theme.display.toLowerCase();

  // NO DEFAULT
}