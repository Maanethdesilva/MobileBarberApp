import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Maps from "./Components/MapsAPI/Maps";
import ImageUploader from "./Components/ImageUploader/ImageUploader";
import NotificationPage from "./Components/NotificationsPage/NotificationPage";
import CustomerHomePage from "./Components/CustomerHomePage/CustomerHomePage";
import ClientCard from "./Components/ClientCard/ClientCard";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CustomerHomePage />
  </React.StrictMode>
);
