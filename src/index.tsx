import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/app/app";

import store from "./redux/store";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
