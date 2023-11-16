import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from '../pages/Layout';
import AboutUs from '../pages/AboutUs';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
]);
