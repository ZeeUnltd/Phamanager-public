import Sidebar from "../components/dashboard/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../components/redux/store";
// import { useEffect, useState } from "react";
// import { refreshToken } from "../components/redux/Auth/features";
import useAuth from "../hooks/useAuth";

interface dashBoardProps{
  allowedTypes?:string
}

const DashboardLayout:React.FC<dashBoardProps> = ({allowedTypes}) => {
  const location = useLocation()
  // const dispatch = useAppDispatch();
  // const users = useAppSelector(state => state.user.user);
  // const auth = useAppSelector(state=>state.auth.Auth)


  const { auth } = useAuth()


//   const [isLoading, setIsLoading] =useState(true)
//   useEffect(()=>{
//     const verifyRefreshToken =async()=>{
//         try {
//             dispatch(refreshToken())
//         } catch (error) {
//             console.log(error);
            
//         }finally{
//             setIsLoading(false)
//         }
//     }
//     !auth?.accessToken?verifyRefreshToken():setIsLoading(false)
// },[])



//   return (
//   <>
// {
//   isLoading ? (
//     <>...loading</>
//   ) : auth ? (
//     <div>
//       <div className="w-full flex justify-start">
//         <div className="w-[300px]">
//           <Sidebar />
//         </div>
//         <div className="w-[calc(100%-300px)]">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   ) : (
//     <Navigate to={'/login'} state={{ from: location }} replace />
//   )
// }
//   </>
//   );


  return (
  <>
{ auth? (
    <div>
      <div className="w-full flex justify-start">
        <div className="w-[300px]">
          <Sidebar />
        </div>
        <div className="w-[calc(100%-300px)]">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={'/login'} state={{ from: location }} replace />
  )
}
  </>
  );

};

export default DashboardLayout;
