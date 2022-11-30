import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { worker } from "./mocks";
import axios from "axios";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom/client";
import { hydrateRoot } from "react-dom/client";
import "@fontsource/public-sans";
import { CssBaseline } from "@mui/material";

if (process.env.NODE_ENV === "development") {
  worker.start();
} else {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
}

const container = document.getElementById("root") as HTMLElement;
const element = (
  <RecoilRoot>
    <BrowserRouter>
      <CssBaseline>
        <App />
      </CssBaseline>
    </BrowserRouter>
  </RecoilRoot>
);
ReactDOM.createRoot(container).render(element);
