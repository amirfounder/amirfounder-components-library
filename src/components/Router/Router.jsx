const BrowserRouter = require('react-router-dom').BrowserRouter

export const Router = ({children}) => {
  return(
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}