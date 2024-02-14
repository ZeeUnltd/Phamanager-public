import { BsFilter } from "react-icons/bs";
import { useState } from "react";
import InventoryTable from "./InventoryTable";
import { useContext } from "react";
import { InventoryContext } from "../../store/inventoryContext";
import FilterData from "./FilterData";

const Inventory = () => {
  const [category, setCategory] = useState("all");
  const [filterModal, setFilterModal] = useState(false);

  const context = useContext(InventoryContext) ?? {
    setRenderedData: () => {},
    inventoryProducts: [],
  };

  const { setRenderedData, inventoryProducts } = context;

  const filterData = (category: string) => {
    if (category != "all") {
      const filteredData = inventoryProducts.filter(
        inventory => inventory.status.toLowerCase() === category
      );
      setCategory(category);
      setRenderedData(filteredData);
    } else {
      setCategory("all");
      setRenderedData(inventoryProducts);
    }
  };

  return (
    <section className="py-6">
      <h3 className="font-bold text-2xl text-text opacity-60">All Inventory</h3>
      <div className="w-full border-2 border-slate-300 rounded-md px-6  mt-6 h-[75vh] overflow-x-visible overflow-y-auto">
        <div className="flex justify-between items-center  bg-white z-10 pt-6">
          <div className="flex justify-between items-center p-2 bg-[#DCEDF5] text-white rounded-full w-[30%]">
            <span
              onClick={() => {
                filterData("all");
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
          <div className="relative w-[100px] border border-formBlue rounded-full text-formBlue p-2 mr-6 text-base">
            <div
              className="flex justify-around items-center cursor-pointer"
              onClick={() => setFilterModal(filterModal => !filterModal)}
            >
              <span>
                <BsFilter />
              </span>
              filter
            </div>
            {filterModal && <FilterData />}
          </div>
        </div>
        <InventoryTable />
      </div>
    </section>
  );
};

export default Inventory;
