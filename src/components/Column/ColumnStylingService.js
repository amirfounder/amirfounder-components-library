export const generateColumnJustifySelf = (props) => {
  // SETUP
  const alignment = props.alignment
  const theme = props.theme && props.theme.column

  // IMPORTANCE 1 --> EXACT
  if (alignment) return alignment.toLowerCase();

  // IMPORTANCE 2 --> GLOBAL
  if (
    theme &&
    theme.alignment
  ) return theme.alignment.toLowerCase();
  
  // DEFAULT
  return 'inherit'
}