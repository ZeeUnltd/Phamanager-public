import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RootLayout from "./pages/RootLayout";
import Result from "./pages/Result";
import Advisory from "./pages/Advisory";
import Payments from "./pages/Payments";
import Prescriptions from "./pages/Prescriptions";
import Applications from "./pages/Applications";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

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
  { path: "signup", element: <SignUp /> },
  { path: "login", element: <Login /> },
]);

const App = () => <RouterProvider router={router} />;

export default App;
