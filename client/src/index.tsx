import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import CustomerHomePage from "./Components/CustomerHomePage/CustomerHomePage";
import NotificationPage from "./Components/NotificationsPage/NotificationPage";
import ImageUploader from "./Components/ImageUploader/ImageUploader";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import LocationSearchBox from "./Components/LocationTextBox/LocationSearchBox";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RegisterPage />
  </React.StrictMode>
);
