import homeIcon from "../../assets/images/sidebarIcons/home.svg";
import inboundIcon from "../../assets/images/sidebarIcons/inbounds.svg";
import crmIcon from "../../assets/images/sidebarIcons/crm.svg";
import helpIcon from "../../assets/images/sidebarIcons/help.svg";
import officeIcon from "../../assets/images/sidebarIcons/office.svg";

interface nav {
  id: number;
  link: string;
  section: string;
  icon: string;
  text: string;
  subList?: nav[];
}

const sidebarNavTop: nav[] = [
  {
    id: 0,
    link: "",
    section: "dashboard",
    icon: homeIcon,
    text: "Dashboard",
  },
  {
    id: 1,
    link: "inbounds",
    section: "inbounds",
    icon: inboundIcon,
    text: "Inbounds",
    subList: [
      {
        id: 0,
        link: "inbounds",
        section: "dispensary-counter",
        icon: homeIcon,
        text: "Dispensary Counter",
      },
      {
        id: 1,
        link: "inbounds/prescriptions",
        section: "dispensary-counter",
        icon: homeIcon,
        text: "Prescriptions",
      },
      {
        id: 2,
        link: "inbounds/marketplace",
        section: "dispensary-counter",
        icon: homeIcon,
        text: "Marketplace",
      },
    ],
  },
  {
    id: 2,
    link: "manager",
    section: "manager",
    icon: officeIcon,
    text: "Manager",
    subList: [
      {
        id: 0,
        link: "manager",
        section: "payments",
        icon: homeIcon,
        text: "Payments",
      },
      {
        id: 1,
        link: "manager/inventory",
        section: "inventory",
        icon: homeIcon,
        text: "Inventory",
      },
      {
        id: 2,
        link: "manager/procurement",
        section: "procurement",
        icon: homeIcon,
        text: "Procurement",
      },
      {
        id: 3,
        link: "manager/clients",
        section: "client",
        icon: homeIcon,
        text: "Client",
      },
    ],
  },
  {
    id: 3,
    link: "crm",
    section: "crm",
    icon: crmIcon,
    text: "CRM",
  },
  {
    id: 4,
    link: "bankOffice",
    section: "bankOffice",
    icon: officeIcon,
    text: "Back-office",
  },
  {
    id: 5,
    link: "settings",
    section: "settings",
    icon: helpIcon,
    text: "settings",
  },
];

const sidebarNavBottom: nav[] = [
  {
    id: 6,
    link: "helpDesk",
    section: "helpDesk",
    icon: helpIcon,
    text: "Help Desk",
  },
  {
    id: 7,
    link: "/login",
    section: "logout",
    icon: helpIcon,
    text: "Logout",
  },
];

export { sidebarNavTop, sidebarNavBottom };
