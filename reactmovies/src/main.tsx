import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./index.css";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { MovieReviews } from "./pages/MovieReviews";
import { NewReleases } from "./pages/NewReleases";
import { TopRated } from "./pages/TopRated";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: "/moviereviews",
        element: <MovieReviews />,
      },
      {
        path: "/toprated",
        element: <TopRated />,
      },
      {
        path: "/newreleases",
        element: <NewReleases />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
