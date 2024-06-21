import React from 'react';
import InventoryBtn from '../../../components/Button/InventoryBtn';
import Card from '../../../components/Cards/card';
import { Link } from 'react-router-dom'
import classes from '../../../components/Button/button.module.scss'
import  '../../../scss/Pages.scss'
import HistoryTable from '../../../components/Tables/InventoryTable/History';
// import InventoryForm from '../Form';
// import Popup from '../Popup';

const Inventory: React.FC=() => {
  return (
    <>
    <section>
    <div className={"btn_container"}>
      <InventoryBtn  
        txtColor={'#fff'}
        bgColor={'#009FE3'}
        btnValue={'Payment Manager'}
      />
    </div>

      <div className="cards_container">
        <Card 
          head="Total payments"
          number="10"
          desc="+ Increased by 30% since July 2022"
          icon = "bxs:memory-card" 
        />
        <Card 
          head="Total orders"
          number="5"
          desc="+ Increased by 30% since July 2022"
          icon = "bxs:memory-card"
        />
        <Card
          head="Unreconciliated"
          number="5"
          desc="- Decreased by 30% since July 2022"
          icon = "bxs:memory-card"
        />
      </div>

     {/* bottom button */}
     <div className={"btn_container"}>
        <button className={classes.btn}>
          <Link to=''>
            View custom report
          </Link>
        </button>
      </div>
      {/* table section */}
      <HistoryTable />
    </section>
    </>
  )
}
export default Inventory;