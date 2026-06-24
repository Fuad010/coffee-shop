import Layout from "@/components/Layout"
import Home from "@/pages/Home"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <div>shop</div>,
      },
      {
        path: "/blog",
        element: <div>blog</div>,
      },
      {
        path: "/about",
        element: <div>about</div>,
      },
      {
        path: "/contact",
        element: <div>contact</div>,
      },
    ],
  },
])
