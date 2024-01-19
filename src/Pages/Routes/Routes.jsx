import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import MoreProducts from "../MoreProducts/MoreProducts/MoreProducts";
import SignIn from "../LogIn/SignIn/SignIn";
import SignUp from "../LogIn/SignUp/SignUp";
import PrivateRoute from "../LogIn/PrivateRoute/PrivateRoute";
import Dashboard from "../Dashboard/Dashbord/Dashboard";
import Buying from "../Buying/Buying";
import Main from "../../Layout/Main";
import Payment from "../Dashboard/Payment/Payment";
import Review from "../Dashboard/Review/Review";
import DashboardHome from "../Dashboard/WelcomeDashboard/DashboardHome";
import ItemOrders from "../Dashboard/ItemOrders/ItemOrders";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/morebike",
        element: <MoreProducts />,
      },
      {
        path: "/buying/:buyid",
        element: (
          <PrivateRoute>
            <Buying></Buying>
          </PrivateRoute>
        ),
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "itemorder",
        element: <ItemOrders />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "review",
        element: <Review />,
      },
    ],
  },
]);
export default route;
