const { ReactRouterDomSwitch } = require("react-router-dom").Switch;

export const Switch = ({children}) => {
  return(
    <ReactRouterDomSwitch>
      {children}
    </ReactRouterDomSwitch>
  )
}