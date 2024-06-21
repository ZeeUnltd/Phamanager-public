// const Inbounds = () => {
//   return <div>Inbounds</div>;
// };

// export default Inbounds;

import React, { useState } from 'react'
import image2 from '/svg/image2.svg'
import love from '/svg/love.svg'
import facebook from '/svg/facebook.svg'
import twitter from '/svg/twitter.svg'
import platform from '/svg/platform.svg'
import restuarant from '/svg/restuarant.svg'
import image from '/svg/image.svg'
import mail from '/svg/mail.svg'
import Category from '../components/CategoricalInventory/Category'
import LoadImage from '../components/LoadImage/Image'
import SearchBox from '../components/SearchBox/SearchBox'
import Inventory from '../components/Inventorys/Inventory'
import Container from '../components/container/container'
import './invoice.css'

const myArray = [
	{
		id: 'sda',
		active: false,
	},
	{
		id: 'sjs',
		active: false,
	},
	{
		id: 'swa',
		active: false,
	},
	{
		id: 'fga',
		active: false,
	},
	{
		id: 'sfa',
		active: false,
	},
	{
		id: 'fgk',
		active: false,
	},
	{
		id: 'qwe',
		active: false,
	},
]

type props = {
    callback: Function
}

const CreateInvoice: React.FC<props> = (props) => {
	const [array, setArray] = useState(myArray)
	const [cartCount, setCartCount] = useState(0)
	const [search, setSearch] = useState("")

	const handleClick = (id: string)=> {
		const current = array.find((arr)=> arr.id === id)
		if (current && current.active === false){
			const value = cartCount + 1
			setCartCount(value)
			setArray(array.map((value)=> value.id === id? {...value, active: true}: value))
			props.callback(value)
		}
		else {
			const value = cartCount - 1
			setCartCount(value)
			setArray(array.map((value)=> value.id === id? {...value, active: false}: value))
			props.callback(value)
		}
	}

	const handleSearch = (text: string)=>{
		setSearch(text)
	}
	return (
		<Container type="blue-border">
			<>
			
			<LoadImage callback={()=> {}} alt="" className='page-image' imagePath={image2} height="200px" width="200px" />
			<div className="inbound-top">
				<div className="restuarant-img">
					<LoadImage callback={()=> {}} alt="" imagePath={restuarant} height="100px" width="100px"/>
				</div>
				<div className="header">
					<h2><span>RX Pharmacy</span> <div><LoadImage callback={()=> {}} alt="" imagePath={love} height="15px" width="15px"/></div></h2>
					<p>Best in class medical dispensary services</p>
					<div className="socials">
						<LoadImage callback={()=> {}} alt="" imagePath={twitter} height="20px" width="20px"/>
						<LoadImage callback={()=> {}} alt="" imagePath={platform} height="20px" width="20px" />
						<LoadImage callback={()=> {}} alt="" imagePath={facebook} height="20px" width="20px"/>
						<LoadImage callback={()=> {}} alt="" imagePath={mail} height="20px" width="20px" />
					</div>
				</div>
				<div className="searchbox">
					<SearchBox onSearch={handleSearch}/>
				</div>
			</div>
			<div className="inventories">
				{
					search? 
					<Category name={`Search results for "${search}"`} count={1} 
					renderInventory={()=>(
						myArray.map((val, index)=> 
							<Inventory onClick={()=>handleClick(val.id)} key={index} image={image} drugName="Paracetamol" drugType='ORAL'/>
						)
					)}
				/>:
				<>
				<Category name="All Inventory" count={1} 
					renderInventory={()=>(
						myArray.map((val, index)=> 
							<Inventory onClick={()=>handleClick(val.id)} key={index} image={image} drugName="Paracetamol" drugType='ORAL'/>
						)
					)}
				/>
				<Category name="Oral Drugs and Supplement" count={1} 
					renderInventory={()=>(
						myArray.map((val, index)=> 
							<Inventory onClick={()=>handleClick(val.id)} key={index} image={image} drugName="Paracetamol" drugType='ORAL'/>
						)
					)}
				/>
				<Category name="Intravenous injections and infusions " count={1} 
					renderInventory={()=>(
						myArray.map((val, index)=> 
							<Inventory onClick={()=>handleClick(val.id)} key={index} image={image} drugName="Paracetamol" drugType='ORAL'/>
						)
					)}
				/>
				<Category name="First aid and treatments" count={1} 
					renderInventory={()=>(
						myArray.map((val, index)=> 
							<Inventory onClick={()=>handleClick(val.id)} key={index} image={image} drugName="Paracetamol" drugType='ORAL'/>
						)
					)}
				/>
				<Category name="Baby and toddler supplies" count={1} 
					renderInventory={()=>(
						myArray.map((val, index)=> 
							<Inventory onClick={()=>handleClick(val.id)} key={index} image={image} drugName="Paracetamol" drugType='ORAL'/>
						)
					)}
				/>
				<Category name="Beauty products" count={1} 
					renderInventory={()=>(
						myArray.map((val, index)=> 
							<Inventory onClick={()=>handleClick(val.id)} key={index} image={image} drugName="Paracetamol" drugType='ORAL'/>
						)
					)}
				/>
				<Category name="Women health and sanitary products" count={1} 
					renderInventory={()=>(
						myArray.map((val, index)=> 
							<Inventory onClick={()=>handleClick(val.id)} key={index} image={image} drugName="Paracetamol" drugType='ORAL'/>
						)
					)}
				/>
				<Category name="Vaccines and cures" count={1} 
					renderInventory={()=>(
						myArray.map((val, index)=> 
							<Inventory onClick={()=>handleClick(val.id)} key={index} image={image} drugName="Paracetamol" drugType='ORAL'/>
						)
					)}
				/>
				</>
				}
				
			</div>
			</>
		</Container>
	)
}

export default CreateInvoice;