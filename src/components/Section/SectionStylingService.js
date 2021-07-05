export const generateSectionGridTemplateColumns = (props) => {
  // SETUP
  const columns = props.columns && props.columns.toLowerCase();
  const children = props.children

  // IMPORTANCE 1 --> EXACT
  if (columns) return columns

  // IF CHILDREN LENGTH > 1
  if (
    children &&
    children.length &&
    children.length > 1
  ) return `repeat(${children.length}, minmax(100px, 1fr))`

  // DEFAULT
  return '1fr'
}

export const generateSectionAlignItems = (props) => {
  // SETUP
  const alignItems = props.alignItems && props.alignItems.toLowerCase();
  const verticalAlignment = props.verticalAlignment && props.verticalAlignment.toLowerCase();
  const theme = props.theme && props.theme.section

  // IMPORTANCE 1 --> EXACT
  if (alignItems) return alignItems;

  // IMPORTANCE 2 --> ABSTRACT
  if (verticalAlignment) return verticalAlignment;

  // IMPORTANCE 3 --> GLOBAL
  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (theme.alignItems) return theme.alignItems.toLowerCase();
    // IMPORTANCE 3.2 --> (GLOBAL) ABSTRACT
    if (theme.verticalAlignment) return theme.verticalAlignment.toLowerCase();
  }

  // DEFAULT
  return 'center'
}

export const generateSectionPadding = (props) => {
  // SETUP
  const padding = props.padding && props.padding.toLowerCase();
  const theme = props.theme && props.theme.section

  // IMPORTANCE 1 --> EXACT
  if (padding) return padding

  // IMPORTANCE 2 --> GLOBAL
  if (
    theme &&
    theme.padding
  ) return theme.padding.toLowerCase();

  // DEFAULT
  return '0px'
}

export const generateSectionMinHeight = (props) => {
  // SETUP
  const minHeight = props.minHeight && props.minHeight.toLowerCase();
  const theme = props.theme && props.theme.section

  // IMPORTANCE 1 --> EXACT
  if (minHeight) return minHeight

  // IMPORTANCE 2 --> GLOBAL
  if (
    theme &&
    theme.minHeight
  ) return theme.minHeight.toLowerCase();

  // DEFAULT
  return '0px'
}

export const generateBackgroundColor = (props) => {
  // SETUP
  const backgroundColor = props.backgroundColor && props.backgroundColor.toLowerCase();
  const theme = props.theme && props.theme.section

  // IMPORTANCE 1 --> EXACT
  if (backgroundColor) return backgroundColor

  // IMPORTANCE 2 --> GLOBAL
  if (
    theme &&
    theme.backgroundColor
  ) return theme.backgroundColor.toLowerCase();

  // DEFAULT
  return 'transparent'
}