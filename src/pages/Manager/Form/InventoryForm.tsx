import React from 'react';
import "./index.css";

const InventoryForm: React.FC = () => {
  return (
    <>
    <div className='container-overlay'>
   
    <div className='form-container'>
   
    <div className=' modal-heading'>
    <p> Add Inventory</p>
    <button>
    <img
    src='/images/inventory/close_icon.svg'
    alt='view icon'
    width='24'
    height='24'/>
    </button>
    </div>
  
    <form>
   
    <div className='flex space-x-1 p-2'>
   <label htmlFor='name' className='form-label'>Item name:</label>
   <input type='text' name='itemName' id='itemName' placeholder='input type name'
   className='border place-items-center font-mono w-[20vw] p-2'/>
   </div>
  
   <div className='flex space-x-4 p-2'>
   <label htmlFor='category' className='form-label'>Category:</label>
   <select name="category" id='category'
   className='border place-items-center font-mono w-[20vw] p-2 ml-4 block bg-white focus:ring-primary focus:border-primary'>
   <option defaultValue='select category'>select category</option>
   <option value="grocery">Groceries and seasonings</option>
   <option value="flour">Flour based supplies</option>
   <option value="grain">Grain food</option>
   <option value="vegetables">Vegetables</option>
   <option value="fruit">Fruits</option>
   <option value="meat">Meat and chicken</option>
   <option value="tuber">Tubers</option>
   <option value="dairy">Dairy products</option>
   <option value="egg">Egg</option>
   <option value="oil">Oils</option>
   <option value="cereal">Cereals</option>
   <option value="fish">Fish</option>
   </select>
   </div>
  
   <div className='flex space-x-10 p-2'>
   <label htmlFor='brand' className='form-label'>Brand:</label>
   <input type='text' name='brand' placeholder='input brand name'
  
   className='border place-items-center font-mono w-[20vw] p-2'/>
   </div>
  
   <div className='flex justify-between space-x-5 p-2'>
   <label htmlFor='quantity' className='form-label'>Quantity:</label>
   <input type='number' name='quantity' placeholder='input number'
   className='border items-end font-mono w-[20vw] p-2'/>
   <select name="quantity" className='border font-mono w-[20vw] p-2 block' data-dropdown-toggle="dropdown">
   <option defaultValue='select unit'>select unit</option>
   <option value="litre">Litres(l)</option>
   <option value="grams">Gram(g)</option>
   <option value="kilo">Kilograms(kg)</option>
   <option value="sachet">Sachets)</option>
   <option value="pound">Pound(9libs)</option>
   <option value='tuber'>Tubers</option>
   <option value="ounz">Ounze(oz)</option>
   <option value="tonne">Tonne</option>
   <option value="cups">Cup</option>
   <option value="basket">Basket</option>
   </select>
   </div>
  
   <div className='flex space-x-11 p-2'>
   <label htmlFor='price' className='form-label'>Price:</label>
   <input type='text' name='price' placeholder='input amount'
   className='border place-items-center font-mono w-[20vw] p-2 '/>
   </div>
  
   <div className='space-x-2'>
   <input type='checkbox' name='checkbox' className='p-1'/>
   <label htmlFor='checkbox' className='text-lg font-bold'>Set minimum inventory alert notification
   </label>
   </div>
  
   <div className='flex justify-center items-center'>
   <button type='submit' className='bg-primary p-2 w-[15vw] rounded-lg text-white'> Add Inventory</button>
   </div>
  
   </form>
    </div>
  
    </div>
    </>
  )
}

export default InventoryForm