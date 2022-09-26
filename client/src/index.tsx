import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import CustomerHomePage from "./Components/CustomerHomePage/CustomerHomePage";
import NotificationPage from "./Components/NotificationsPage/NotificationPage";
import ImageUploader from "./Components/ImageUploader/ImageUploader";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CustomerHomePage />
  </React.StrictMode>
);
