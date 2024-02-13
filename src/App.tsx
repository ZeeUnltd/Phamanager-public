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
import DashboardLayout from "./pages/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Inbounds from "./pages/Inbounds";
import Manager from "./pages/Manager";
import Crm from "./pages/Crm";
import BackOffice from "./pages/BackOffice";
import Settings from "./pages/Settings";
import HelpDesk from "./pages/HelpDesk";
import InboundsPrescription from "./pages/InboundsPrescription";
import Marketplace from "./pages/Marketplace";
import ManageInventory from "./pages/ManageInventory";
import ManageClients from "./pages/ManageClients";
import ManageProcurement from "./pages/ManageProcurement";

const router = createBrowserRouter([
  { path: "signup", element: <SignUp /> },
  { path: "login", element: <Login /> },
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
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "inbounds", element: <Inbounds /> },
      { path: "manager", element: <Manager /> },
      { path: "crm", element: <Crm /> },
      { path: "bankOffice", element: <BackOffice /> },
      { path: "settings", element: <Settings /> },
      { path: "helpDesk", element: <HelpDesk /> },
      { path: "inbounds/prescriptions", element: <InboundsPrescription /> },
      { path: "inbounds/marketplace", element: <Marketplace /> },
      { path: "manager/inventory", element: <ManageInventory /> },
      { path: "manager/clients", element: <ManageClients /> },
      { path: "manager/procurement", element: <ManageProcurement /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
