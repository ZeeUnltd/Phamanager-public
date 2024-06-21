import Crm from "./Crm";
import withRoutes from '../../hoc/withSubRoutes/withRoutes'


export default withRoutes({
   subRoutes: [
    {
      path: "/", 
      Route: Crm, 
    }
      ]}
  )