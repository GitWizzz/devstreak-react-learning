import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "./Layout/MainLayout";

// Lazy-loaded pages
const Home = lazy(() => import("./Pages/Home"));
const FetchOld = lazy(() => import("./Pages/FetchOld"));
const FetchRQ = lazy(() => import("./Pages/FetchRQ"));

// Fallback components
const NotFound = () => (
  <div style={{ textAlign: "center", marginTop: "2rem", fontSize: "1.5rem" }}>
    404 - Page Not Found
  </div>
);

const Loading = () => (
  <div style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</div>
);

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "trad", element: <FetchOld /> },
      { path: "rq", element: <FetchRQ /> },
      { path: "*", element: <NotFound /> },
    ],
    errorElement: <NotFound />, // Handles errors at the layout level
  },
]);

const ReactRouter = () => (
  <Suspense fallback={<Loading />}>
    <RouterProvider router={router} fallbackElement={<Loading />} />
  </Suspense>
);

export default ReactRouter;
