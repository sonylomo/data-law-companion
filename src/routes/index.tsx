import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Layout from '../pages/Layout';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
