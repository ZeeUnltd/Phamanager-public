import { IoIosCloseCircleOutline } from "react-icons/io";
import { drugCategories, drugUnits } from "../../constants";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useState } from "react";
import { useContext } from "react";
import { InventoryContext } from "../../store/inventoryContext";

type props = {
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

const AddInventoryModal = (props: props) => {
  const defaultProductData = {
    id: "",
    name: "",
    category: "",
    brand: "",
    quantity: 0,
    unit: "",
    price: 0,
    minStatus: false,
    minAmount: 10,
    status: "",
  };

  const [showInnerModal, setShowInnerModal] = useState(false);
  const [inventoryCreated, setInventoryCreated] = useState(false);

  const context = useContext(InventoryContext) ?? {
    productData: defaultProductData,
    setProductData: () => {},
    addToInventory: () => {},
  };

  const { productData, setProductData, addToInventory } = context;

  const handleMinStatusToggle = () => {
    setProductData({ ...productData, minStatus: !productData.minStatus });
  };

  const createInventoryHandler = () => {
    addToInventory();
    setInventoryCreated(true);
  };

  return (
    <div className="mt-14">
      <div className="w-[60%] mx-auto border-2 border-formBlue p-4">
        <div className=" flex items-center justify-between">
          <p className="font-medium">Add Inventory</p>
          <IoIosCloseCircleOutline
            size="1.5rem"
            className="cursor-pointer"
            onClick={() => props.setPage("home")}
          />
        </div>
        <div className="mt-6 flex justify-start gap-6">
          <label
            htmlFor="name"
            className="text-[16px] text-[#110C4A] font-medium self-center w-[20%] shrink-0"
          >
            Item name
          </label>
          <input
            value={productData ? productData["name"] : ""}
            onChange={e =>
              setProductData({ ...productData, name: e.target.value })
            }
            type="text"
            id="name"
            placeholder="item name"
            className="px-2 py-1 text-[16px] w-[40%] border-none outline-none bg-[#F5F5F5] rounded-md placeholder:text-[12px] placeholder:text-[#B1B1B4] placeholder:font-medium shrink-0"
          />
        </div>
        <div className="mt-6 flex justify-start gap-6">
          <label
            htmlFor="category"
            className="text-[16px] text-[#110C4A] font-medium self-center w-[20%] shrink-0"
          >
            Category
          </label>
          <select
            value={productData ? productData["category"] : ""}
            onChange={e =>
              setProductData({ ...productData, category: e.target.value })
            }
            name="category"
            id="category"
            className="p-2 border-none outline-none bg-[#F5F5F5] rounded-md w-[40%] text-[16px]"
          >
            <option value="category" id="category">
              Category
            </option>
            {drugCategories.map((res, i) => (
              <option key={i} value={res.title} id={res.title}>
                {res.title}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-6 flex justify-start gap-6">
          <label
            htmlFor="brand"
            className="text-[16px] text-[#110C4A] font-medium self-center w-[20%] shrink-0"
          >
            Brand
          </label>
          <input
            value={productData ? productData["brand"] : ""}
            onChange={e =>
              setProductData({ ...productData, brand: e.target.value })
            }
            type="text"
            id="brand"
            placeholder="Brand"
            className="px-2 py-1 text-[16px] w-[40%] border-none outline-none bg-[#F5F5F5] rounded-md placeholder:text-[12px] placeholder:text-[#B1B1B4] placeholder:font-medium shrink-0"
          />
        </div>
        <div className="mt-6 flex justify-start gap-6">
          <label
            htmlFor="dosage"
            className="text-[16px] text-[#110C4A] font-medium self-center w-[20%] shrink-0"
          >
            Quantity
          </label>

          <input
            value={productData ? productData["quantity"] : ""}
            onChange={e =>
              setProductData({
                ...productData,
                quantity: +e.target.value,
              })
            }
            type="number"
            id="quantity"
            placeholder="Input number"
            className="px-2 py-1 text-[16px] w-[40%] border-none outline-none bg-[#F5F5F5] rounded-md placeholder:text-[12px] placeholder:text-[#B1B1B4] placeholder:font-medium shrink-0"
          />
          <select
            value={productData ? productData["unit"] : ""}
            onChange={e =>
              setProductData({ ...productData, unit: e.target.value })
            }
            name="unit"
            id="unit"
            className="p-2 border-none outline-none bg-[#F5F5F5] rounded-md w-[40%] text-[16px]"
          >
            <option value="unit" id="unit">
              Unit
            </option>
            {drugUnits.map((res, i) => (
              <option key={i} value={res.title} id={res.title}>
                {res.title}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-6 flex justify-start gap-6">
          <label
            htmlFor="price"
            className="text-[16px] text-[#110C4A] font-medium self-center w-[20%] shrink-0"
          >
            Price
          </label>
          <input
            value={productData ? productData["price"] : ""}
            onChange={e =>
              setProductData({ ...productData, price: +e.target.value })
            }
            type="number"
            id="price"
            placeholder="Enter price"
            className="px-2 py-1 text-[16px] w-[40%] border-none outline-none bg-[#F5F5F5] rounded-md placeholder:text-[12px] placeholder:text-[#B1B1B4] placeholder:font-medium shrink-0"
          />
        </div>
        <div className="mt-6 flex justify-start gap-6">
          <div className="w-[20%]">
            <input
              type="checkbox"
              id="checkbox"
              className="w-[20px] h-[20px]"
              onClick={handleMinStatusToggle}
            />
          </div>
          <label
            htmlFor="checkbox"
            className="text-[16px] text-[#110C4A] font-medium self-center w-[60%] shrink-0"
          >
            Set minimum inventory alert notification
          </label>
        </div>
        {productData.minStatus && (
          <div className="mt-6 flex justify-start gap-6">
            <label
              htmlFor="quantity"
              className="text-[16px] text-[#110C4A] font-medium self-center w-[20%] shrink-0"
            >
              Quantity
            </label>
            <input
              value={productData ? productData["minAmount"] : ""}
              onChange={e =>
                setProductData({ ...productData, minAmount: +e.target.value })
              }
              type="number"
              id="minQuantity"
              placeholder="input number"
              className="px-2 py-1 text-[16px] w-[40%] border-none outline-none bg-[#F5F5F5] rounded-md placeholder:text-[12px] placeholder:text-[#B1B1B4] placeholder:font-medium shrink-0"
            />
          </div>
        )}
        <div className="mt-8 flex justify-center items-center">
          <button
            className="text-white text-[16px] font-medium bg-[#009FE3] rounded-md px-6 py-3"
            onClick={() => {setShowInnerModal(true);  console.log(showInnerModal, inventoryCreated)}}
          >
            Add Inventory
          </button>
        </div>
      </div>
      {showInnerModal && !inventoryCreated && (
        <div className="absolute top-0 left-0 w-full h-[550px] flex justify-center items-center">
          <div className="w-[350px] h-[220px] bg-[#26272B] rounded-2xl">
            <div className="flex justify-between items-center p-4 text-white border-b-2 border-[#475467]">
              <p className="ml-14">Confirm new inventory</p>
              <IoIosCloseCircleOutline
                size="1.5rem"
                className="cursor-pointer"
                onClick={() => setShowInnerModal(false)}
              />
            </div>
            <p className="text-white text-center text-[12px] font-normal my-10">
              Are you sure you want to create a new invetory?
            </p>
            <div className="flex justify-center items-center gap-6">
              <button
                className="rounded-3xl bg-[#E1E8EC] text-[12px] py-3 px-4"
                onClick={() => setShowInnerModal(false)}
              >
                Cancel and go back
              </button>
              <button
                className="rounded-3xl bg-[#F04438] text-[12px] py-3 px-4"
                onClick={createInventoryHandler}
              >
                Create inventory
              </button>
            </div>
          </div>
        </div>
      )}
      {showInnerModal && inventoryCreated && (
        <div className="absolute top-0 left-0 w-full h-[550px] flex justify-center items-center">
          <div className="w-[350px] h-[220px] bg-[#26272B] rounded-2xl">
            <div className="flex justify-center items-center mt-4">
              <span className="p-2 bg-[#D1FADF] rounded-full">
                <IoIosCheckmarkCircleOutline size="2.5rem" color="green" />
              </span>
            </div>
            <p className="text-white text-center text-[14px] font-normal mt-4">
              Inventory created
            </p>
            <p className="text-white text-center text-[12px] font-normal mt-4">
              You have created a new inventory
            </p>
            <div className="flex justify-center items-center mt-4">
              <button
                className="text-white text-[16px] font-medium bg-[#009FE3] rounded-3xl px-4 py-2"
                onClick={() => props.setPage("inventory")}
              >
                View all inventory
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddInventoryModal;
