import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/index";
import { CountryContextProvider } from "./context/CountryContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CountryContextProvider>
      <RouterProvider router={router} />
    </CountryContextProvider>
  </React.StrictMode>
);
