import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { worker } from "./mocks";
import axios from "axios";
import { hydrate, render } from "react-dom";

if (process.env.NODE_ENV === "development") {
  worker.start();
} else {
  axios.defaults.baseURL = "https://api.example.com";
}

const element = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement.hasChildNodes()) {
  hydrate(element, rootElement);
} else {
  render(element, rootElement);
}
