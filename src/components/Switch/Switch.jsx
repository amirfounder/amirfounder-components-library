const { Switch: ReactRouterDomSwitch } = require("react-router-dom");

export const Switch = ({children}) => {
  return(
    <ReactRouterDomSwitch>
      {children}
    </ReactRouterDomSwitch>
  )
}