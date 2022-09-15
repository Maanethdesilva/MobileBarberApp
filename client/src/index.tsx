import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Maps from "./Components/MapsAPI/Maps";
import ImageUploader from "./Components/ImageUploader/ImageUploader";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Maps />
  </React.StrictMode>
);
