export const generatePageBackgroundColor = (props) => {
  // SETUP
  const backgroundColor = props.backgroundColor && props.backgroundColor.toLowerCase();
  const global = props.global && props.global.toLowerCase();

  // IMPORTANCE 1 --> EXACT
  if (backgroundColor) return backgroundColor;

  // IMPORTANCE 1 --> GLOBAL
  if (
    global &&
    global.backgroundColor
  ) return global.backgroundColor.toLowerCase();

  // DEFUALT
  return 'transparent'
}