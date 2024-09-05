import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RootLayout from "./pages/RootLayout";
import Result from "./pages/Result";
import DrugDetails from "./pages/DrugDetails";
import CartToKYC from "./pages/CartToKYC";
import Advisory from "./pages/Advisory";
import Payments from "./pages/Payments";
import Prescriptions from "./pages/Prescriptions";
import Applications from "./pages/Applications";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import DashboardLayout from "./pages/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Inbounds from "./pages/Inbounds/Inbounds";
// import Inbounds from "./pages/Inbounds;
import Manager from "./pages/Manager";
import Crm from "./pages/Crm";
import BackOffice from "./pages/BackOffice";
import Settings from "./pages/Settings";
import HelpDesk from "./pages/HelpDesk";
// import InboundsPrescription from "./pages/InboundsPrescription";
import Marketplace from "./pages/Marketplace";
import ManageInventory from "./pages/ManageInventory";
import ManageClients from "./pages/ManageClients";
import ManageProcurement from "./pages/ManageProcurement";
import Inventory from "./components/dashboard/Inventory";

import Application from "./pages/Inbounds/Info/Application";
// import InvoiceCR from "./pages/Inbounds/invoice-cr/InvoiceCR";
// import PrintInvoice from "./pages/Inbounds/printInvoice/PrintInvoice";
import Checkout from "./pages/Inbounds/checkout/Checkout";
import Cart from "./pages/Inbounds/prescription/cart/Cart";
import PresCart from "./pages/Inbounds/prescription/cart/presCart";
import QuotedCart from "./pages/Inbounds/prescription/cart/quotedCart";
import CartCheckout from "./pages/Inbounds/prescription/checkout/Checkout";
import PresCartCheckout from "./pages/Inbounds/prescription/checkout/PresCheckout";
import QuotedCartCheckout from "./pages/Inbounds/prescription/checkout/quotedCheckout";
import CreateQuote from "./pages/Inbounds/prescription/createquote/CreateQuote";
import Prescription from "./pages/Inbounds/prescription/Prescription";
import SourcePrescription from "./pages/Inbounds/prescription/SourcePrescription";
import PrescriptionsManager from "./pages/Inbounds/prescription/PrescriptionsManager";
import PrescriptionDetails from "./pages/Inbounds/prescription/PrescriptionDetails";
import Managerr from "./pages/Manager/Manager";
import CustomReport from "./pages/Manager/customReport/CustomReport";
import CreateInvoice from "./pages/Inbounds/createInvoice/CreateInvoice";
// import InventoryForm from "./pages/Manager/Form/InventoryForm";

const types = {};

const router = createBrowserRouter([
  { path: "sign-up", element: <SignUp /> },
  { path: "login", element: <Login /> },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "results", element: <Result /> },
      { path: "drug-details", element: <DrugDetails /> },
      { path: "cart-to-KYC", element: <CartToKYC /> },
      { path: "advisory", element: <Advisory /> },
      { path: "payments", element: <Payments /> },
      { path: "prescriptions", element: <Prescriptions /> },
      { path: "applications", element: <Applications /> },
    ],
  },
  {
    path: "dashboard/:id",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "inbounds", element: <Inbounds /> },
      // { path: "manager", element: <Manager /> },
      { path: "manager", element: <Managerr /> },
      { path: "crm", element: <Crm /> },
      { path: "bankOffice", element: <BackOffice /> },
      { path: "settings", element: <Settings /> },
      { path: "helpDesk", element: <HelpDesk /> },
      { path: "inbounds/prescriptions", element: <Prescription /> },
      { path: "inbounds/marketplace", element: <Marketplace /> },
      { path: "manager/inventory", element: <ManageInventory /> },
      { path: "manager/allInventory", element: <Inventory /> },
      { path: "manager/clients", element: <ManageClients /> },
      { path: "manager/procurement", element: <ManageProcurement /> },

      { path: "inbounds/infoapplication", element: <Application /> },
      // { path: "inbounds/prescriptions", element: <Prescription /> },
      // { path: "inbounds/invoiceCR", element: <InvoiceCR /> },
      // { path: "inbounds/printInvoice", element: <PrintInvoice /> },
      { path: "inbounds/checkout", element: <Checkout /> }, //component
      { path: "inbounds/prescription/cart", element: <Cart cart={[]} id={undefined} /> },

      { path: "inbounds/prescription/pres-cart", element: <PresCart presCart={[]} id={undefined} /> },
      { path: "inbounds/prescription/quote-pres-cart", element: <QuotedCart presCart={[]} id={undefined} /> },
      {
        path: "inbounds/prescription/cart-checkout",
        element: <CartCheckout />,
      },
      {
        path: "inbounds/prescription/pres-cart-checkout",
        element: <PresCartCheckout />,
      },
      {
        path: "inbounds/prescription/quote-pres-cart-checkout",
        element: <QuotedCartCheckout />,
      },
      {
        path: "inbounds/prescription/create-invoice",
        element: <CreateInvoice />,
      },
      {
        path: "inbounds/add-new-purchase",
        element: <CreateQuote />,
      },
      {
        path: "inbounds/prescriptions/source-prescriptions",
        element: <SourcePrescription />,
      },
      {
        path: "inbounds/prescriptions/prescriptions-manager",
        element: <PrescriptionsManager />,
      },
      {
        path: "inbounds/prescriptions/prescriptions-details",
        element: <PrescriptionDetails />,
      },
      { path: "manager/custom-report", element: <CustomReport /> },
      // { path: "manager/inventory-form", element: <InventoryForm /> }, used to add new inventory, already exist
      // { path: "manager/dispensaryCounter", element: <DispensaryCounter /> },
    ],
  },
]);

export default router;
