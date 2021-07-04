export const generateHeadingColor = (props) => {
  // SETUP
  const color = props.color
  const global = props.global && props.global.heading

  // IMPORTANCE 1 --> EXACT
  if (color) return color.toLowerCase();

  // IMPORTANCE 2 --> GLOBAL
  if (
    global &&
    global.color
  ) return global.color.toLowerCase();
  
  // DEFAULT
  return 'black';
}

export const generateHeadingFontWeight = (props) => {
  // SETUP
  const fontWeight = props.fontWeight
  const global = props.global && props.global.heading
  
  // IMPORTANCE 1 --> EXACT
  if (fontWeight) return fontWeight.toLowerCase();

  if (
    global &&
    global.heading
  ) return global.heading.toLowerCase();

  // DEFAULT
  return fontWeight ? fontWeight.toLowerCase() : 300
}

export const generateHeadingFontSize = (level, props) => {
  // SETUP
  const fontSize = props.fontSize
  const global = props.global && props.global.heading

  // IMPORTANCE 1 --> EXACT
  if (fontSize) return fontSize.toLowerCase();

  // IMPORTANCE 2 --> LEVEL
  if (level) {
    switch (Number(level)) {
      case 1:
        // IMPORTANCE 2.1 --> (GLOBAL) LEVEL 1
        if (
          global &&
          global.one &&
          global.one.fontSize
        ) return global.one.fontSize.toLowerCase();
        // DEFAULT LEVEL 1
        return '4rem'
      case 2:
        // IMPORTANCE 2.1 --> (GLOBAL) LEVEL 2
        if (
          global &&
          global.two &&
          global.one.fontSize
        ) return global.two.fontSize.toLowerCase();
        // DEFAULT LEVEL 2
        return '3rem'
      case 3:
        // IMPORTANCE 2.1 --> (GLOBAL) LEVEL 3
        if (
          global &&
          global.three &&
          global.one.fontSize
        ) return global.three.fontSize.toLowerCase();
        // DEFAULT LEVEL 3
        return '2rem'
      case 4:
        // IMPORTANCE 2.1 --> (GLOBAL) LEVEL 4
        if (
          global &&
          global.four &&
          global.one.fontSize
        ) return global.four.fontSize.toLowerCase();
        // DEFAULT LEVEL 4
        return '1.6rem'
      case 5:
        // IMPORTANCE 2.1 --> (GLOBAL) LEVEL 5
        if (
          global &&
          global.five &&
          global.one.fontSize
        ) return global.five.fontSize.toLowerCase();
        // DEFAULT LEVEL 5
        return '1.2rem'
      case 6:
        // IMPORTANCE 2.1 --> (GLOBAL) LEVEL 6
        if (
          global &&
          global.six &&
          global.one.fontSize
        ) return global.six.fontSize.toLowerCase();
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