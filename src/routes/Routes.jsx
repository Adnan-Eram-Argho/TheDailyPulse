import {createBrowserRouter} from "react-router-dom";
import Mainlayouts from "../layouts/Mainlayouts";
import ErrorElement from "../components/shared/ErrorElement";
import Home from "../pages/Home";
import Technology from "../pages/Technology";
import Business from "../pages/Business";
import Environment from "../pages/Environment";
import Local from "../pages/Local";
import Health from "../pages/Health";
import World from "../pages/World";
import About from "../pages/About";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRooutes from "./PrivateRooutes";
import DashboardLayouts from "../layouts/DashboardLayouts";
import MainDashboard from "../components/dashboard/MainDashboard";
import AllNews from "../components/dashboard/AllNews";
import AddNews from "../components/dashboard/AddNews";
import EditNews from "../components/dashboard/EditNews";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayouts/>,
      errorElement:<ErrorElement/>,
      children:[
        {
            index:true,
            element:<Home/>
        },
        {
          path:"technology",
          element:<Technology/>
        },
        {
          path:"business",
          element:<Business/>
        },
        {
          path:"environment",
          element:<Environment/>
        },
        {
          path:"local",
          element:<Local/>
        },
        {
          path:"health",
          element:<Health/>
        },
        {
          path:"world",
          element:<World/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"register",
          element:<Registration/>
        },
      ]
    },
    {
      path:"/dashboard",
      element:<PrivateRooutes>
        <DashboardLayouts/>
      </PrivateRooutes>,
      errorElement:<ErrorElement/>,
      children:[
        {
          index:true,
          element:<MainDashboard/>
        },
        {
          path:'all-news',
          element:<AllNews/>
        },
        {
          path:'add-news',
          element:<AddNews/>
        },
        {
          path:'edit-news/:id',
          element:<EditNews/>
        },
      ]

    }
  ]);


export default router;