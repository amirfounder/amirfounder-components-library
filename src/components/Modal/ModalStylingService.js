export const generateModalBackground = (props) => {
  // SETUP
  const backgroundColor = props.backgroundColor && props.backgroundColor.toLowerCase();
  const theme = props.theme && props.theme.modal

  // IMPORTANCE 1 --> EXACT
  if (backgroundColor) return backgroundColor;
  
  // IMPORTANCE 2 --> GLOBAL
  if (
    theme &&
    theme.backgroundColor
  ) return backgroundColor.toLowerCase();

  // DEFAULT
  return 'rgba(0,0,0,0.25)'
}

export const generateModalAlignItems = (props) => {
  // SETUP
  const alignItems = props.alignItems && props.alignItems.toLowerCase();
  const theme = props.theme && props.theme.modal

  // IMPORTANCE 1 --> EXACT
  if (alignItems) return alignItems;

  // IMPORTANCE 2 --> GLOBAL
  if (
    theme &&
    theme.alignItems
  ) return theme.alignItems.toLowerCase();

  // DEFAULT
  return 'center'
}

export const generateModalJustifyContent = (props) => {
  // SETUP
  const justifyContent = props.justifyContent && props.justifyContent.toLowerCase();
  const theme = props.theme && props.theme.modal
  
  // IMPORTANCE 1 --> EXACT
  if (justifyContent) return justifyContent;

  // IMPORTANCE 2 --> GLOBAL
  if (
    theme &&
    theme.justifyContent
  ) return theme.justifyContent.toLowerCase();

  // DEFAULT
  return 'center'
}