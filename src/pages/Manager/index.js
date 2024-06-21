import Manager from "./Manager";
import withRoutes from '../../hoc/withSubRoutes/withRoutes';
import ViewInventories from "./InventoryTable";
import InventoryForm from "./Form";

export default withRoutes({
    subRoutes: [
    {
      path: "/", 
      Route: Manager, 
      // subtext: 'Procurement',
      
    },
    {
      path: "view-all-inventories",
      Route: ViewInventories,
      text: 'Inventory manager',
      subtext: 'view all inventories',
      prevRoute: '/manager'
    },
    {
      path: 'add-new-inventory',
      Route: InventoryForm,
      text: 'Inventory Manager',
      subtext: 'Add new inventory',
      prevRoute: '/manager'
    },
    // {
    //   path: 'view-report',
    //   Route: InvoiceCR,
    //   text: 'Dispensary Counter',
    //   subtext: 'Inbounds - custom report',
    //   prevRoute: '/inbounds'
    // }
    ]}
  )