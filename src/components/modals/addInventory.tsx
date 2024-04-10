import React from 'react'
import CustomModal from './customModal'
import CustomModalInput from '../Forms/customModalInput';
import { Form, Formik } from 'formik';


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
  
  
const AddInventory = () => {

  return (
    <CustomModal title='Add Inventory' size='md'>
    <div className="w-full my-8 px-8">
    <Formik onSubmit={()=>console.log('')} initialValues={{}}>
        <Form>
        <div className=" flex flex-col gap-6 w-[25rem]">
            <CustomModalInput label='Item name' name='item_name'placeholder='Item name'/>
            <CustomModalInput label='Category' name='category'placeholder='Item name'/>
            <CustomModalInput label='Brand' name='brand'placeholder='Brand'/>
<div className="flex justify-between ">
<CustomModalInput label='Quantiy' name='quantity'placeholder='input number'/>
<CustomModalInput  name='unit'placeholder='Unit'/>
</div>
            <CustomModalInput label='Price' name='price'placeholder='Enter price'/>
        </div>
        <div className="">
           <div className="flex ">
           <input className='text-2xl default:ring-2 checked:text-black indeterminate:bg-gray-300' type='checkbox'/>
           <div className='text-[#110C4A] font-semibold '>
            Set minimum inventory alert notification 
           </div>
           </div>
        </div>
        </Form>
    </Formik>
      <div className="">
      </div>
    </div>
    </CustomModal>
  )
}

export default AddInventory