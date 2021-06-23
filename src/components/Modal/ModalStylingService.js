/**
 * @name generateModalBackground
 * @description Generates css styling for the modal background color
 * @param {String} backgroundColorProp Background color
 * @returns String css style
 */
export const generateModalBackground = (backgroundColorProp) => backgroundColorProp ? backgroundColorProp.toLowerCase() : 'rgba(0,0,0,0.25)'