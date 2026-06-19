import Layout from "@/components/Layout"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <div>App</div>
            <div>App</div>
            <div>App</div>
          </>
        ),
      },
    ],
  },
])
