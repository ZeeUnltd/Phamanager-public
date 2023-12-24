import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <div className="w-full">
      <div>
        <MainNavigation />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
