import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "./Layout/MainLayout";

const Home = lazy(() => import("./Pages/Home"));
const FetchOld = lazy(() => import("./Pages/FetchOld"));
const FetchRQ = lazy(() => import("./Pages/FetchRQ"));

const NotFound = () => <div>404 - Page Not Found</div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/trad", element: <FetchOld /> },
      { path: "/rq", element: <FetchRQ /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const ReactRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
  </Suspense>
);

export default ReactRouter;
