import React, { useState } from 'react'
import minus from './minus.svg'
import plus from './plus.svg'

interface props {
    quantity: number
    price: string
    width?: string
    increaseCounter: () => void
    decreaseCounter: () => void
}


const CounterPrice: React.FC<props> = ({quantity=1, price, width, increaseCounter, decreaseCounter}) => {
    // const [count, setCount] = useState(1)
    // const handleCounter = (type: string)=> {
    //     switch (type){
    //         case "Increment":
    //             setCount((count)=> count + 1)
    //             return
    //         case "Decrement":
    //             if(count !== 1)
    //                 setCount((count)=> count - 1)
    //             return
    //     }
    // }
    return (
        <div className='counter-box' style={{
            width: width? width: "410px"
        }}>
            <div className="counter">
                <h3>Quantity</h3>
                <div className="lower-box">
                    <img src={minus} onClick={() => decreaseCounter()} alt="" width="20px"/>
                    <span>{quantity}</span>
                    <img src={plus} onClick={() => increaseCounter()} alt="" width="20px"/>
                </div>
            </div>
            <div className="price">
                <h3>Total fee</h3>
                <div className="lower-box">
                    <span>Due Today</span>
                    <div>{"₦ " + price || "500" }</div>
                </div>
            </div>
        </div>
    )
}

export default CounterPrice
