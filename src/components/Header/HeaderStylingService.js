export const generateHeaderBackgroundColor = (props) => {
  // SETUP
  const backgroundColor = props.backgroundColor
  const global = props.global && props.global.header

  // IMPORTANCE 1 --> EXACT
  if (backgroundColor) return backgroundColor.toLowerCase();

  // IMPORTANCE 2 --> GLOBAL
  if (
    global &&
    global.backgroundColor
  ) return global.backgroundColor.toLowerCase();

  return 'white'
}

export const generateHeaderBoxShadow = (props) => {
  // SETUP
  const shadow = props.shadow
  const global = props.global && props.global.header

  // IMPORTANCE 1 --> EXACT
  if (shadow) return '0px 10px 15px rgba(0,0,0,0.15)'

  // IMPORTANCE 2 --> GLOBAL
  if (
    global &&
    global.shadow
  ) return shadow.toLowerCase();

  // NO DEFAULT
}

export const generateHeaderHeight = (props) => {
  // SETUP
  const size = props.size
  const height = props.height
  const global = props.global && props.global.header
  
  // IMPORTANCE 1 --> EXACT
  if (height) return height.toLowerCase();
  
  // IMPORTANCE 2 --> SIZE
  if (size) {
    if (size.toLowerCase() === 'large') return '10vh';
    if (size.toLowerCase() === 'medium') return '7vh';
    if (size.toLowerCase() === 'small') return '5vh';
  }
  
  // IMPORTANCE 3 --> GLOBAL
  if (global) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (global.height) return global.height.toLowerCase();
    
    // IMPORTANCE 3.2 --> (GLOBAL) SIZE
    if (global.size) {
      if (global.size.toLowerCase() === 'large') return '10vh';
      if (global.size.toLowerCase() === 'medium') return '7vh';
      if (global.size.toLowerCase() === 'small') return '5vh';
    }
  }

  return '7vh';
}

export const generateHeaderMaxHeight = (props) => {
  // SETUP
  const size = props.size
  const maxHeight = props.maxHeight
  const global = props.global && props.global.header

  // IMPORTANCE 1 --> EXACT
  if (maxHeight) return maxHeight.toLowerCase();

  // IMPORTANCE 2 --> SIZE
  if (size) {
    if (size.toLowerCase() === 'large') return '130px';
    if (size.toLowerCase() === 'medium') return '100px';
    if (size.toLowerCase() === 'small') return '70px';
  }

  // IMPORTANCE 3 --> GLOBAL
  if (global) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (global.maxHeight) return global.maxHeight.toLowerCase();

    // IMPORTANCE 3.2 --> (GLOBAL) SIZE
    if (global.size) {
      if (global.size.toLowerCase() === 'large') return '130px';
      if (global.size.toLowerCase() === 'medium') return '100px';
      if (global.size.toLowerCase() === 'small') return '70px';
    }
  }

  return '100px'
}

export const generateHeaderMinHeight = (props) => {
  // SETUP
  const size = props.size
  const minHeight = props.minHeight
  const global = props.global && props.global.header

  // IMPORTANCE 1 --> EXACT
  if (minHeight) return minHeight.toLowerCase();

  // IMPORTANCE 2 --> SIZE
  if (size) {
    if (size.toLowerCase() === 'large') return '100px';
    if (size.toLowerCase() === 'medium') return '70px';
    if (size.toLowerCase() === 'small') return '40px'; 
  }

  // IMPORTANCE 3 --> GLOBAL
  if (global) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (global.minHeight) return global.minHeight.toLowerCase();
    
    // IMPORTANCE 3.2 --> (GLOBAL) SIZE
    if (global.size) {
      if (global.size.toLowerCase() === 'large') return '100px';
      if (global.size.toLowerCase() === 'medium') return '70px';
      if (global.size.toLowerCase() === 'small') return '40px';
    }
  }

  return '80px';
}