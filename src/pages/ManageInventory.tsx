import CustomReport from "../components/dashboard/CustomReport";
import Header from "../components/dashboard/Header";
import TopBox from "../components/dashboard/TopBox";
import TopButton from "../components/dashboard/TopButton";
import EmptyShelf from "../components/dashboard/EmptyShelf";
import { FaCirclePlus } from "react-icons/fa6";
import { GrFormView } from "react-icons/gr";
import { useEffect, useState } from "react";
import InventoryItem from "../components/dashboard/InventoryItem";
import AddInventoryModal from "../components/dashboard/AddInventoryModal";
import Inventory from "../components/dashboard/Inventory";
import { useAppDispatch, useAppSelector } from "../components/redux/store";
import AddInventory from "../components/modals/addInventory";
import { showItem } from "../components/redux/utils";
import { getAllInvetory } from "../components/redux/inventory/features";

const ManageInventory = () => {
  const [page, setPage] = useState("home");
  const isEmpty = false;
  const show = useAppSelector(state=>state.utils.show)
  const Dispatch = useAppDispatch()
  const inventory = useAppSelector(state=>state.inventory.inventory)


  useEffect(()=>{
    Dispatch(getAllInvetory())
  },[Dispatch])
  console.log(inventory);
  
  const topBtnOptions = [
    {
      id: 0,
      title: "Add new inventory",
      icon: <FaCirclePlus />,
      action:()=>Dispatch(showItem('add-inventory'))
      // action:()=>Dispatch(inventory())
    
    },
    {
      id: 1,
      title: "View all inventories",
      link: "inventory",
      icon: <GrFormView size="1.5rem" />,
      action:()=>setPage('inventory')
      
    },
  ];

  return (
    <div className="relative px-16 mt-6">
      <Header title="Inventory" />
      {page === "home" && (
        <>
          <section>
            <div className="flex justify-end mt-4">
              <TopButton
                title="Inventory manager"
                setPage={setPage}
                options={topBtnOptions}
              />
            </div>
            <div className="flex justify-between mt-4">
              <TopBox
                title="Total Inventory"
                number={10}
                desc="+ Increased by 30% since July 2022"
                active={true}
              />
              <TopBox
                title="Minimum inventory alert"
                number={5}
                desc="+ Increased by 30% since July 2022"
              />
              <TopBox
                title="Top performing inventory"
                number={5}
                desc="- Decreased by 30% since July 2022"
              />
            </div>
            <div className="flex justify-end mt-4">
              <CustomReport />
            </div>
          </section>
          <section className="border-2 border-formBlue my-10 max-h-[500px]">
            <div className="p-6 flex justify-between items-center border-b-2">
              <h2 className="text-[22px] font-semibold text-text">
                Recent Activities
              </h2>
              <p onClick={()=>setPage('inventory')} className="text-formBlue underline text-[20px] hover:cursor-pointer">View All</p>
            </div>
            {isEmpty && (
              <EmptyShelf
                title1="You have no previous inventory changes"
                title2="Create your first inventory item"
                title3="Just click the ‘Add new item’ button above to begin."
              />
            )}

            {!isEmpty && (
              <div className="p-6">
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
              </div>
            )}
          </section>
        </>
      )}
      {/* {page === "modal" && <AddInventoryModal setPage={setPage} />} */}
      {show === 'add-inventory' && <AddInventory/>}
      {page === "inventory" && <Inventory />}

    </div>
  );
};

export default ManageInventory;
