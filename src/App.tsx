import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RootLayout from "./pages/RootLayout";
import Result from "./pages/Result";
import Advisory from "./pages/Advisory";
import Payments from "./pages/Payments";
import Prescriptions from "./pages/Prescriptions";
import Applications from "./pages/Applications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "results", element: <Result /> },
      { path: "advisory", element: <Advisory /> },
      { path: "payments", element: <Payments /> },
      { path: "prescriptions", element: <Prescriptions /> },
      { path: "applications", element: <Applications /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
