import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { worker } from "./mocks";
import axios from "axios";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom/client";
import { hydrateRoot } from "react-dom/client";

if (process.env.NODE_ENV === "development") {
  worker.start();
} else {
  axios.defaults.baseURL = "https://api.example.com";
}

const container = document.getElementById("root") as HTMLElement;
const element = (
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>
);
const root = hydrateRoot(container, element);
