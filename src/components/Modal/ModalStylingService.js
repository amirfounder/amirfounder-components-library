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

  // IMPORTANCE LEVEL 1 --> EXACT
  if (backgroundColor) return backgroundColor;
  
  // IMPORTANCE LEVEL 2 --> GLOBAL
  if (
    global &&
    global.backgroundColor
  ) return backgroundColor.toLowerCase();

  // DEFAULT
  return 'rgba(0,0,0,0.25)'
}