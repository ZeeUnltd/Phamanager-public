import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RootLayout from "./pages/RootLayout";
import Result from "./pages/Result";
import Advisory from "./pages/Advisory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "results", element: <Result /> },
      { path: "advisory", element: <Advisory /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
