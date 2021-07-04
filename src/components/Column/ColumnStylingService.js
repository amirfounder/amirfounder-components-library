export const generateColumnJustifySelf = (props) => {
  // SETUP
  const alignment = props.alignment
  const global = props.global && props.global.column

  // IMPORTANCE 1 --> EXACT
  if (alignment) return alignment.toLowerCase();

  // IMPORTANCE 2 --> GLOBAL
  if (
    global &&
    global.alignment
  ) return global.alignment.toLowerCase();
  
  // DEFAULT
  return 'inherit'
}