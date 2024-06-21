import { BsCheck2Circle, BsCheck2Circle as BsCheck2CircleComponent } from "react-icons/bs";
import { GoInfo, GoInfo as GoInfoComponent } from "react-icons/go";
import { MdOutlineCancel, MdOutlineCancel as MdOutlineCancelComponent } from "react-icons/md";

/**
 * Variables here are props for the OptionButton component in the PrescriptionTableRow Component
 *
 */

export const availableOptions = [
  {
    title: "Quote",
    icon: BsCheck2CircleComponent,
    iconProps: { className: "text-green-500", size: 20 },
    to: "inbounds/prescription/create-invoice",
    to_alt: "inbounds/prescription/create-invoice",
  },
  {
    title: "View Details",
    icon: GoInfoComponent,
    iconProps: { size: 20 },
    to: "inbounds/prescriptions/prescriptions-details",
    to_alt: "inbounds/prescriptions/prescriptions-details",
  },
];

export const acceptedPendingOptions = [
  {
    title: "Dispense Order",
    icon: BsCheck2CircleComponent,
    iconProps: { className: "text-green-500", size: 20 },
    to: "/inbounds/create-receipt",
    to_alt: "/inbounds/create-receipt",
  },
  {
    title: "Delete Order",
    icon: MdOutlineCancelComponent,
    iconProps: { className: "text-red-500", size: 20 },
    onClick: "",
  },
  {
    title: "View Details",
    icon: GoInfoComponent,
    iconProps: { size: 20 },
    to: "inbounds/prescriptions/prescriptions-details",
    to_alt: "inbounds/prescription/quote-pres-cart"
  },
];

export const accepteddispensedOptions = [
  {
    title: "Delete Order",
    icon: MdOutlineCancelComponent,
    iconProps: { className: "text-red-500", size: 20 },
    onClick: "",
  },
  {
    title: "View Details",
    icon: GoInfoComponent,
    iconProps: { size: 20 },
    to: "inbounds/prescriptions/prescriptions-details",
    to_alt: "inbounds/prescription/quote-pres-cart",
  },
];