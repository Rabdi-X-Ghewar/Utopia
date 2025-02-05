import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Default import
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from "./components/ui/sidebar";

// Create the root element
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Render the App component
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
