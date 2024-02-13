import { BsFilter } from "react-icons/bs";
import { useState } from "react";
import { data } from "../../constants/inventory";
import InventoryTable from "./InventoryTable";

const Inventory = () => {
  const [inventory, setInventory] = useState(data);
  const [category, setCategory] = useState("all");

  const filterData = (category: string) => {
    const filteredData = data.filter(
      inventory => inventory.status.toLowerCase() === category
    );
    setCategory(category);
    setInventory(filteredData);
  };
  return (
    <section className="py-6">
      <h3 className="font-bold text-2xl text-text opacity-60">All Inventory</h3>
      <div className="w-full border-2 border-slate-300 rounded-md px-6  mt-6 h-[75vh] overflow-x-visible overflow-y-auto">
        <div className="flex justify-between items-center  bg-white z-10 pt-6">
          <div className="flex justify-between items-center p-2 bg-[#DCEDF5] text-white rounded-full w-[30%]">
            <span
              onClick={() => {
                setInventory(data);
                setCategory("all");
              }}
              className={`p-3 text-base text-center rounded-full w-1/2 cursor-pointer  ${
                category === "all" && `bg-[#009FE3]`
              }`}
            >
              All
            </span>
            <span
              onClick={() => {
                filterData("alerted");
              }}
              className={`p-3 text-base text-center rounded-full w-1/2 cursor-pointer  ${
                category === "alerted" && `bg-[#009FE3]`
              }`}
            >
              Limit Alerts
            </span>
          </div>
          <div className="w-[100px] border border-formBlue rounded-full flex text-formBlue justify-around items-center p-2 mr-6 cursor-pointer text-base">
            <span>
              <BsFilter />
            </span>
            filter
          </div>
        </div>
        <InventoryTable inventory={inventory} />
      </div>
    </section>
  );
};

export default Inventory;
