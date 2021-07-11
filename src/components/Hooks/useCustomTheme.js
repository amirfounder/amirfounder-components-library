import { setCustomVariable } from "../../utils/Helpers";

/**
 * @name useCustomTheme
 * @description Hook to set a custom theme for the React application
 * @param {Object} customTheme Theme object
 */
export const useCustomTheme = (customTheme) => {
  const root = document.documentElement;

  const {
    buttonStyles,
    headerStyles,
    ...rest
  } = customTheme

  setCustomVariable(root, '--button--custom-color')
  setCustomVariable(root, '--button--custom-hover-color')

}