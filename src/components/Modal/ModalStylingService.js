/**
 * @name generateModalBackground
 * @description Generates css styling for the modal background color
 * @param {String} backgroundColor Background color
 * @returns String css style
 */
export const generateModalBackground = (props) => {
  // SETUP
  const backgroundColor = props.backgroundColor && props.backgroundColor.toLowerCase();
  const global = props.global && props.global.modal

  // IMPORTANCE 1 --> EXACT
  if (backgroundColor) return backgroundColor;
  
  // IMPORTANCE 2 --> GLOBAL
  if (
    global &&
    global.backgroundColor
  ) return backgroundColor.toLowerCase();

  // DEFAULT
  return 'rgba(0,0,0,0.25)'
}

export const generateModalAlignItems = (props) => {
  // SETUP
  const alignItems = props.alignItems && props.alignItems.toLowerCase();
  const global = props.global && props.global.modal

  // IMPORTANCE 1 --> EXACT
  if (alignItems) return alignItems;

  // IMPORTANCE 2 --> GLOBAL
  if (
    global &&
    global.alignItems
  ) return global.alignItems.toLowerCase();

  // DEFAULT
  return 'center'
}

export const generateModalJustifyContent = (props) => {
  // SETUP
  const justifyContent = props.justifyContent && props.justifyContent.toLowerCase();
  const global = props.global && props.global.modal
  
  // IMPORTANCE 1 --> EXACT
  if (justifyContent) return justifyContent;

  // IMPORTANCE 2 --> GLOBAL
  if (
    global &&
    global.justifyContent
  ) return global.justifyContent.toLowerCase();

  // DEFAULT
  return 'center'
}