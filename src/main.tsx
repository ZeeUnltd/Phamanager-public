import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { InventoryContextProvider } from "./store/inventoryContext.tsx";
import { Provider } from "react-redux";
import { store } from "./components/redux/store.ts";
import { AuthProvider } from "./AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient =  new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
<AuthProvider>
  <Provider store={store}>
   <InventoryContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </InventoryContextProvider>
   </Provider>
</AuthProvider>

  </React.StrictMode>
);
