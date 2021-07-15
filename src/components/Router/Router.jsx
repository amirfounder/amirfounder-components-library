import { BrowserRouter } from "react-router-dom";

export const Router = (props) => {
  const {
    children,
    ...other
  } = props;

  return (
    <BrowserRouter
      {...other}
    >
      {children}
    </BrowserRouter>
  )
}