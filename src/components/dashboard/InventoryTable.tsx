import { useContext, useEffect } from "react";
import { InventoryContext } from "../../store/inventoryContext";
import InventoryTableRow from "./InventoryTableRow";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getAllInvetory } from "../redux/inventory/features";

import { InventoryItem, inventory } from "../redux/inventory/interface";

type Inventory = {
  id: string;
  name: string;
  category: string;
  brand: string;
  quantity: number;
  unit: string;
  price: number;
  minStatus: boolean;
  minAmount: number;
  status: string;
};

const InventoryTable = () => {
  const dispatch = useAppDispatch()
  const allInventory = useAppSelector(state=>state.inventory.inventory)

  useEffect(()=>{
    dispatch(getAllInvetory())
  }, [dispatch])


  console.log(allInventory);
  const inventories:any = allInventory?.data
  

  return (
    <div className="w-full my-8">
      <div className="flex items-center justify-between font-semibold text-black text-base px-2 py-6">
        <div className="w-[18%]">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-#009fe3 h-5 w-5 border border-[#009fe3] rounded-md"
            />

            <label htmlFor="orderID" className="text-base">
              Inventory ID
            </label>
          </div>
        </div>
        <div className="w-[20%]">Item name</div>
        <div className="w-[20%]">Brand</div>
        <div className="w-[18%]">Current quantity</div>
        <div className="w-[15%]">Status</div>
        <div className="w-[9%]"></div>
      </div>
      <div className="">
        {inventories.map((inventory: InventoryItem, index: number) => (
          <InventoryTableRow key={inventory.id + index} inventory={inventory} />
        ))}
      </div>
    </div>
  );
};

export default InventoryTable;
