import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import AboutUs from "../pages/aboutUs/AboutUs";
import Compliance from "../pages/compliance/Compliance";
import Resources from "../pages/resources/Resources";
import PageNotFound from "../pages/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/compliance-issues",
        element: <Compliance />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
    ],
  },
]);
