import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { ConfigProvider, theme } from "antd";
import "./styles/global.css";
import { Auth } from "./features/auth/auth";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Auth>
        <RouterProvider router={router} />
      </Auth>
    </ConfigProvider>
  </Provider>
);

reportWebVitals();
