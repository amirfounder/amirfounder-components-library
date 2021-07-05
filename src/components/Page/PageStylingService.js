export const generatePageBackgroundColor = (props) => {
  // SETUP
  const backgroundColor = props.backgroundColor && props.backgroundColor.toLowerCase();
  const theme = props.theme && props.theme.page;

  // IMPORTANCE 1 --> EXACT
  if (backgroundColor) return backgroundColor;

  // IMPORTANCE 1 --> GLOBAL
  if (
    theme &&
    theme.backgroundColor
  ) return theme.backgroundColor.toLowerCase();

  // DEFUALT
  return 'transparent'
}