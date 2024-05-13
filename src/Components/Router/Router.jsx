import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import NotFoundPage from "../NotFound/NotFound";
import Register from "../Register/Register";
import Quires from "../Queries/Quires";
import PrivateRouter from "../../PrivateRoute/PrivateRouter";
import MyQueries from "../MyQueries/MyQueries";
import AddQueryPage from "../AddQueryPage/AddQueryPage";
import AllQuery from "../AllQuery/AllQuery";
import QueryDetails from "../QueryDetails/QueryDetails";
import axios from "axios";
import UpdateQuery from "../UpdateQuery/UpdateQuery";
import MyRecommindations from "../MyRecommendations/MyRecommindations";
import Recommendations from "../Recommendations/Recommendations";
import MyFeature from "../MyFeature/MyFeature";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/queries",
        element: (
          <PrivateRouter>
            <Quires></Quires>
          </PrivateRouter>
        ),
      },
      {
        path: "/myQueries",
        element: (
          <PrivateRouter>
            <MyQueries></MyQueries>
          </PrivateRouter>
        ),
      },
      {
        path: "/addQuery",
        element: (
          <PrivateRouter>
            <AddQueryPage></AddQueryPage>
          </PrivateRouter>
        ),
      },
      {
        path: "/allQuery",
        element: <AllQuery></AllQuery>,
      },
      {
        path: "/feature",
        element: <MyFeature></MyFeature>,
      },
      {
        path: "/queryDetails/:id",
        loader: ({ params }) =>
          axios.get(`https://crud-server-alternative-product.vercel.app/findData/${params.id}`, {
            withCredentials: true,
          }),
        element: (
          <PrivateRouter>
            <QueryDetails></QueryDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/queryUpdate/:id",
        loader: ({ params }) =>
          axios.get(`https://crud-server-alternative-product.vercel.app/findData/${params.id}`, {
            withCredentials: true,
          }),
        element: (
          <PrivateRouter>
            <UpdateQuery></UpdateQuery>
          </PrivateRouter>
        ),
      },
      {
        path: "/myRecommendations",
        element: (
          <PrivateRouter>
            <MyRecommindations></MyRecommindations>
          </PrivateRouter>
        ),
      },
      {
        path: "/recommendationsForMe",
        element: (
          <PrivateRouter>
            <Recommendations></Recommendations>
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;
