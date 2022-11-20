import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { worker } from "./mocks";
import axios from "axios";

if (process.env.NODE_ENV === "development") {
  worker.start();
} else {
  axios.defaults.baseURL = "https://api.example.com";
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
