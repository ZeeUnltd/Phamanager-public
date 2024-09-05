import React, { ThHTMLAttributes, useState } from "react";
import CustomModal from "./customModal";
import CustomModalInput from "../Forms/customModalInput";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { Button } from "../elements/button";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";
import Axios from "../../api/axios";

interface InventoryItem {
  existing_id: string;
  item_name: string;
  category: string;
  brand: string;
  quantity: number | null;
  unit: string;
  price: number | null;
}

const AddInventory = () => {
  const createProduct_url = "/manager/inventory";
  const [checked, setchecked] = useState(false);
  let queryClient = useQueryClient();

  const handleCheckboxChange = (event: any) => {
    setchecked(event.target.checked);
  };

  const inventoryInitialvalues: InventoryItem = {
    existing_id: `#${Math.random()}`,
    item_name: "",
    category: "",
    brand: "",
    quantity: null,
    unit: "",
    price: null,
  };

  const inventoryValidationSchema = Yup.object().shape({
    item_name: Yup.string()
      .min(2, "Item name must be at least 2 characters")
      .max(50, "Item name must be at most 50 characters")
      .required("Item name is required"),
    quantity: Yup.number()
      .min(1, "Quantity must be at least 1")
      .required("Quantity is required"),
    unit: Yup.string()
      .min(1, "Unit must be at least 1")
      .required("Unit is required"),
    price: Yup.number().required("Price is required"),
  });

  const mutation = useMutation<InventoryItem, Error, InventoryItem>({
    mutationFn: async (data: InventoryItem) => {
      const response = await Axios.post<InventoryItem>(createProduct_url, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: (error) => {
      console.error("Failed to add product:", error);
    },
  });

  const onSubmit = (data: InventoryItem) => {
    mutation.mutate(data);
  };
  
  return (
    <CustomModal title="Add Inventory" size="md">
      <div className="w-full my-8 px-8">
        <Formik
          onSubmit={onSubmit}
          initialValues={inventoryInitialvalues}
          validationSchema={inventoryValidationSchema}
        >
          <Form>
            <div className=" flex flex-col gap-6 w-[25rem]">
              <CustomModalInput
                label="Existing Inventory ID"
                name="existing_id"
                placeholder="Item ID"
              />
              <CustomModalInput
                label="Item name"
                name="item_name"
                placeholder="Item name"
              />
              <CustomModalInput
                label="Category"
                name="category"
                placeholder="Category"
              />
              <CustomModalInput
                label="Brand"
                name="brand"
                placeholder="Brand"
              />

              <CustomModalInput
                label="Quantity"
                gap={6}
                name="quantity"
                placeholder="input number"
              />

              <CustomModalInput label="Unit" name="unit" placeholder="Unit" />

              <CustomModalInput
                label="Price"
                name="price"
                placeholder="Enter price"
              />
            </div>
            <div className="">
              <div className="flex mt-4 justify-between w-[25rem] ">
                <input
                  checked={checked}
                  onChange={handleCheckboxChange}
                  className="text-2xl default:ring-2 checked:text-black indeterminate:bg-gray-300"
                  type="checkbox"
                />
                <div className="text-[#110C4A] font-semibold  ">
                  Set minimum inventory alert notification
                </div>
              </div>
              {checked && (
                <div className="my-6 w-[25rem]">
                  <CustomModalInput
                    label="Quantity"
                    name="quantity"
                    placeholder="Input number"
                  />
                </div>
              )}
              <div className="flex justify-center items-center self-center  mt-4 ">
                <div className="flex justify-center items-center w-1/3">
                  <Button size="full" type="submit">
                    Add Inventory
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
        <div className=""></div>
      </div>
    </CustomModal>
  );
};

export default AddInventory;
