import {createBrowserRouter} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import NotFoundPage from "../NotFound/NotFound";
import Register from "../Register/Register";

const router = createBrowserRouter([
  {
    path : "/",
    element :<Main></Main>,
    errorElement : <NotFoundPage></NotFoundPage>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/login",
        element : <Login></Login>
      },
      {
        path : "/register",
        element : <Register></Register>
      }
    ]
  }
])

export default router;