export const generateHeadingColor = (props) => {
  // SETUP
  const color = props.color
  const theme = props.theme && props.theme.heading

  // IMPORTANCE 1 --> EXACT
  if (color) return color.toLowerCase();

  // IMPORTANCE 2 --> GLOBAL
  if (
    theme &&
    theme.color
  ) return theme.color.toLowerCase();
  
  // DEFAULT
  return 'black';
}

export const generateHeadingFontWeight = (props) => {
  // SETUP
  const fontWeight = props.fontWeight
  const theme = props.theme && props.theme.heading
  
  // IMPORTANCE 1 --> EXACT
  if (fontWeight) return fontWeight.toLowerCase();

  if (
    theme &&
    theme.heading
  ) return theme.heading.toLowerCase();

  // DEFAULT
  return fontWeight ? fontWeight.toLowerCase() : 300
}

export const generateHeadingFontSize = (level, props) => {
  // SETUP
  const fontSize = props.fontSize
  const theme = props.theme && props.theme.heading

  // IMPORTANCE 1 --> EXACT
  if (fontSize) return fontSize.toLowerCase();

  // IMPORTANCE 2 --> LEVEL
  if (level) {
    switch (Number(level)) {
      case 1:
        // IMPORTANCE 2.1 --> (GLOBAL) LEVEL 1
        if (
          theme &&
          theme.one &&
          theme.one.fontSize
        ) return theme.one.fontSize.toLowerCase();
        // DEFAULT LEVEL 1
        return '4rem'
      case 2:
        // IMPORTANCE 2.1 --> (GLOBAL) LEVEL 2
        if (
          theme &&
          theme.two &&
          theme.one.fontSize
        ) return theme.two.fontSize.toLowerCase();
        // DEFAULT LEVEL 2
        return '3rem'
      case 3:
        // IMPORTANCE 2.1 --> (GLOBAL) LEVEL 3
        if (
          theme &&
          theme.three &&
          theme.one.fontSize
        ) return theme.three.fontSize.toLowerCase();
        // DEFAULT LEVEL 3
        return '2rem'
      case 4:
        // IMPORTANCE 2.1 --> (GLOBAL) LEVEL 4
        if (
          theme &&
          theme.four &&
          theme.one.fontSize
        ) return theme.four.fontSize.toLowerCase();
        // DEFAULT LEVEL 4
        return '1.6rem'
      case 5:
        // IMPORTANCE 2.1 --> (GLOBAL) LEVEL 5
        if (
          theme &&
          theme.five &&
          theme.one.fontSize
        ) return theme.five.fontSize.toLowerCase();
        // DEFAULT LEVEL 5
        return '1.2rem'
      case 6:
        // IMPORTANCE 2.1 --> (GLOBAL) LEVEL 6
        if (
          theme &&
          theme.six &&
          theme.one.fontSize
        ) return theme.six.fontSize.toLowerCase();
        // DEFAULT LEVEL 6
        return '0.8rem'
      default: { }
    }
  }

  // DEFAULT
  return '3rem'
}

export const generateHeadingBackgroundRepeat = (props) => {
  // SETUP
  const background = props.background
  const backgroundRepeat = props.backgroundRepeat

  // ONLY APPLY IF BACKGROUND IS PRESENT
  if (background) {
    if (backgroundRepeat) return backgroundRepeat.toLowerCase()
    return 'no-repeat'
  }

  // NO DEFAULT
}

export const generateHeadingBackgroundSize = (props) => {
  // SETUP
  const background = props.background
  const backgroundSize = props.backgroundSize

  // ONLY APPLY IF BACKGROUND IS PRESENT
  if (background) {
    if (backgroundSize) backgroundSize.toLowerCase()
    return 'cover'
  }

  // NO DEFAULT
}

export const generateHeadingBackgroundAttachment = (props) => {
  // SETUP
  const background = props.background
  const backgroundAttachment = props.backgroundAttachment

  // ONLY APPLY IF BACKGROUND IS PRESENT
  if (background) {
    if (backgroundAttachment) return backgroundAttachment.toLowerCase()
    return 'scroll'
  }

  // NO DEFAULT
}

export const generateHeadingBackground = (props) => {
  // SETUP
  const background = props.background
  
  // ONLY APPLY IF BACKGROUND IS PRESENT
  if (background) return `url(${background})`

  // DEFAULT
  return 'none'
}

export const generateHeadingWebkitTextFillColor = (props) => {
  // SETUP
  const background = props.background

  // ONLY APPLY IF BACKGROUND IS PRESENT
  if (background) return 'transparent'

  // NO DEFAULT
}