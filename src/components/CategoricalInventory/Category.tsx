
import Inventory from '../Inventorys'
import image from '/svg/image.svg'


import Image from '../LoadImage/Image'
import rightArrow from '/svg/right-arrow.svg'
import leftArrow from '/svg/left-arrow.svg'
import "./index.css"


console.log(rightArrow)

interface props {
    name: string
    count: number
	renderInventory: Function
}
const Category: React.FC<props> = (props) => {
    const myArray = [0, 2, 4, 6, 8]
    const array = myArray.map((_, index)=> 
    
        <Inventory key={index} image={image} drugName="Paracetamol" drugType='ORAL'/>
    )

	return (
		<div className='category'>
			<div className="top-layer">
				<h2>{props.name}</h2>
				<div className="arrow">
					<Image imagePath={leftArrow} alt="left arrow" callback={()=> {}} />
					<Image imagePath={rightArrow} alt="rignt arrow" callback={()=> {}}/>
				</div>
			</div>
			<div className='array'>
				{props.renderInventory()}
			</div>
		</div>
	)
}

export default Category
