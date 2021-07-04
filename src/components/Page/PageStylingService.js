export const generatePageBackgroundColor = (props) => {
  // SETUP
  const backgroundColor = props.backgroundColor && props.backgroundColor.toLowerCase();
  const global = props.global && props.global.toLowerCase();

  // IMPORTANCE LEVEL 1 --> EXACT
  if (backgroundColor) return backgroundColor;

  // IMPORTANCE LEVEL 1 --> GLOBAL
  if (
    global &&
    global.backgroundColor
  ) return global.backgroundColor.toLowerCase();

  // DEFUALT
  return 'transparent'
}