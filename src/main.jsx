import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorePage from "./components/ErrorPage.jsx";
import TestPage from "./components/pages/TestPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
     errorElement: <ErrorePage />,
     children: [
      {
        path: "testPage",
        element: <TestPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
