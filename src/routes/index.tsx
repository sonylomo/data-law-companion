import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../components/Layout";
import AboutUs from "../pages/aboutUs/AboutUs";
import Compliance from "../pages/compliance/Compliance";
import News from "../pages/news/News";
import CaseStudies from "../pages/caseStudies/CaseStudies";
// import Blog from '../pages/news/sections/Blog';
import BlogPost from "../pages/resources/Blog";
import OnePost from "../components/resources/singlePost";

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
        path: "/news",
        element: <News />,
      },
      {
        path: "/case-studies",
        element: <CaseStudies />,
      },
      {
        path: "/blog",
        element: <BlogPost />,
      },
      {
        path: "/blog/:slug",
        element: <OnePost />,
      },
    ],
  },
]);
