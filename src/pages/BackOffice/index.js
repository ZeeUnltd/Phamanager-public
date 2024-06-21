import BackOffice from "./BankOffice";
import withRoutes from '../../hoc/withSubRoutes/withRoutes'


export default withRoutes({
   subRoutes: [
    {
      path: "/", 
      Route: BackOffice
    },
    ]}
  )