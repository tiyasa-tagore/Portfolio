import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Resume from "../Resume/Resume";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import ConatctPath from "../Home/ContactPath/ConatctPath";
import Introduction from "../Home/Introduction/Introduction";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/resume",
            element:<Resume/>
        },
        {
            path:"/about",
            element:<Introduction></Introduction>
        },
        {
            path:"/projects",
            element:<Projects/>
        },
        {
            path:"/contact",
            element:<ConatctPath/>
        },
      ]
    },
  ]);

export default router;