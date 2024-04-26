import OptionButton from "../OptionButton";
import { options } from "../../constants/inventory/index";
import { InventoryItem } from "../redux/inventory/interface";



type InventoryTableProps = {
  inventory: InventoryItem;
};

const InventoryTableRow = ({ inventory }: InventoryTableProps) => {
  return (
    <div
      key={inventory.id}
      className="hover:shadow-sm hover:shadow-text odd:border-2 py-6 px-2 capitalize flex items-center justify-between text-[16px] text-text"
    >
      <div className="w-[18%] flex items-center gap-2">
        <input
          type="checkbox"
          className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-#009fe3 h-5 w-5 border border-[#009fe3] rounded-md"
        />

        <label htmlFor="inventory" className="text-[#009fe3]">
          {inventory.id}
        </label>
      </div>
      <div className="w-[20%]">{inventory.itemName}</div>
      <div className="w-[20%]">{inventory.brand}</div>
      <div className="w-[18%]">{inventory.quantity}</div>
      <div className="w-[15%]">
        <p
          // className={`p-2 border-2 rounded-xl text-center text-base ${
          //   inventory.status.toLocaleLowerCase() === "available" &&
          //   `bg-[#9FF1CA]  border-[#15A273]`
          // }  ${
          //   inventory.status.toLocaleLowerCase() === "alerted" &&
          //   `bg-[#eabeb1] text-[#c34722] border-[#c34722]`
          // }`}
        >
          {inventory.status}
        </p>
      </div>
      <div className="flex justify-center items-center w-[9%]">
        {/* <OptionButton inventory={inventory} options={options} /> */}
      </div>
    </div>
  );
};

export default InventoryTableRow;
