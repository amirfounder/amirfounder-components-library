export const generateColumnJustifySelf = (props) => {
  // SETUP
  const alignment = props.alignment
  const global = props.global && props.global.column

  // IMPORTANCE LEVEL 1 --> EXACT
  if (alignment) return alignment.toLowerCase();

  // IMPORTANCE LEVEL 2 --> GLOBAL
  if (
    global &&
    global.alignment
  ) return global.alignment.toLowerCase();
  
  // DEFAULT
  return 'inherit'
}