import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NotificationPage from "./Components/NotificationsPage/NotificationPage";
import "bootstrap/dist/css/bootstrap.css";
import Maps from "./Components/MapsAPI/Maps";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Maps />
  </React.StrictMode>
);
