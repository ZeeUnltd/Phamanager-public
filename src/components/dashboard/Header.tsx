import { FiShoppingCart } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { useContext } from 'react';
import AuthContext from "../../AuthProvider";

type props = {
  title: string;
};

const Header = ({ title }: props) => {

  const { pharmacy } = useContext(AuthContext);;
  return (
    <div className="w-full flex justify-between">
      <h2 className="font-bold font-Euclid text-[32px] text-text">{title}</h2>

      <div>
        <div className="flex items-center gap-6">
          <span className="rounded-full bg-neutral-200 p-3">
            <FiShoppingCart size="1.3rem" />
          </span>
          <span>
            <IoNotificationsOutline size="1.5rem" />
          </span>
          <span className="rounded-[100%] py-2 px-3 bg-[#E0CA04] font-semibold">
            PA
          </span>
        </div>
        <div className="flex justify-end mt-1">
          <p className="text-text text-[12px]">
          {/* User ID: 12345678 */}
          {pharmacy? pharmacy : "Network error"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
