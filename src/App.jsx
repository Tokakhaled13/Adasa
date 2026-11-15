
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home";
import Blog from "./components/Blog";
import AboutUs from "./components/AboutUs";
import Layout from "./components/Layout";
import BlogCard from "./components/BlogCard";
import NotFound from "./components/NotFound";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "blogs",
        element: <Blog />,
      },
      {
        path: "blogs/:slug",
        element: <BlogCard />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={route} />;
}
