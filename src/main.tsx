import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/index";
import { CountryContext } from "./utils/Context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CountryContext.Provider value={"kenya"}>
      <RouterProvider router={router} />
    </CountryContext.Provider>
  </React.StrictMode>
);
