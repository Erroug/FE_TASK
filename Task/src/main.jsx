import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import DesignerDashboard from "./candidatepage.jsx";
import App from "./App.jsx";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/candidate",
    element: <DesignerDashboard />,
  },
]);
// const root = document.getElementById("root");
// createRoot(root).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
);
