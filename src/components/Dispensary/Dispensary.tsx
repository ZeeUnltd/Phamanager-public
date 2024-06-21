import React from 'react'
import drugimage from './image.svg'


interface state {
    drugName: string
    image: string
    brandName: string
    tabletSize: string
}

const Dispensary: React.FC<state> = ({drugName, image, brandName, tabletSize}) => {

    return (
            <div className='drug-dispensary'>
                <img src={image || drugimage} alt="drug"/>
                <div className='description'>
                    <h4 className='drug-name'>{drugName || "Penincillin Ointment"}</h4>
                    <span className='brand-name'>{brandName || "Unknown brand Name"}</span>
                    <h4 className='cart-tabletSize'>{tabletSize || "Tablet size not known"} | 1 Tube</h4>
                </div>
            </div>
    )
}

export default Dispensary
