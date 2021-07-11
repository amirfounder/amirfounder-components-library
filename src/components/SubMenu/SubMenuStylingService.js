export const generateSubMenuTransform = (props) => {
  // DEFAULT
  const transform = props.transform && props.transform.toLowerCase();
  const theme = props.theme && props.theme.submenu

  // IMPORTNACE 1
  if (transform) return transform

  // IMPORTNACE 2
  if (
    theme &&
    theme.transform
  ) return theme.transform.toLowerCase();
  
  // NO DEFAULT
}