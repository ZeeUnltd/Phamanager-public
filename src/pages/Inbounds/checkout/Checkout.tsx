import React from 'react'
import { Link } from 'react-router-dom'
import CounterPrice from '../../../components/CounterPrice'
import Dispensary from '../../../components/Dispensary'
import {RiDeleteBin6Line} from 'react-icons/ri'
import Container from '../../../components/container/container'
import "./index.css"

const Checkout: React.FC = () => {

    return (
        <Container type='blue-border'>

        <div className="checkout-page">
                <div className="top">
                    <Dispensary/>
                    <CounterPrice price='₦40.00'/>
                    <RiDeleteBin6Line style={{
                        fontSize: "15px",
                        position: 'absolute',
                        color: 'red',
                        transform: 'translate(0, -50%)',
                        top: '50%',
                        right: '-25px'
                    }}/>
                </div>
            <div/>
            <div className="checkout-items">
                <div>
                    <span>Item total</span>
                    <span>4000.00</span>
                </div>
                <div className='c-button'>
                <Link style={{
                    width: '100%'
                }} to="/inbounds/print-invoice">
                    
                    Checkout
                </Link>
                    </div>
                
            </div>
        </div>
        </Container>
    )
}

export default Checkout
