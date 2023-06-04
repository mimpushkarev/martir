import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./home"));
const NotFound = lazy(() => import("./not-found"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
