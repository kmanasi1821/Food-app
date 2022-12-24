import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Root, { rootLoader } from "./routes/root";
import Team, { teamLoader } from "./routes/team";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "team",
        element: <Team />,
        loader: teamLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
