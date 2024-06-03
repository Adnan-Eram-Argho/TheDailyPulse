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
      ]
    },
  ]);


export default router;