export const generateDropdownPadding = (props) => {
  // SETUP
  const padding = props.padding && props.padding.toLowerCase();
  const theme = props.theme && props.theme.dropdown

  // IMPORTANCE 1 - EXACT
  if (padding) return padding.toLowerCase();

  // IMPORTANCE 2 - THEME
  if (
    theme &&
    theme.padding
  ) return theme.padding.toLowerCase();

  // DEFAULT
  return '20px 0px 0px 0px'
}