import Sidebar from "../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
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
  );
};

export default DashboardLayout;
