import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root from "./Components/Root";
import Home from "./Components/Home";
import Jobs from "./Components/Jobs";
import AppliedJobs from "./Components/AppliedJobs";
import Statistics from "./Components/Statistics";
import ErrorPage from "./Components/ErrorPage";
// import Blogs from "./Components/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
