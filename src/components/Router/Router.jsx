const { BrowserRouter } = require('react-router-dom');

export const Router = ({children}) => {
  return(
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}