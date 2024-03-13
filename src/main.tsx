import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { ThemeProvider } from "@/components/theme/theme-provider.tsx";
import { Provider } from "./context/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="@DT-Money:theme">
      <Provider>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
