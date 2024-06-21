import React from "react";
import CustomButton from "../../components/Button/Button";
import Card from "../../components/Cards/card";
import "../../scss/Pages.scss";
import Container from "../../components/container/container";

import classes from "../../components/Button/button.module.scss";

import CustomTable from "../../components/Tables/Table";
import { Link } from "react-router-dom";
import Category from "../../components/CategoricalInventory/Category";

const Inbounds: React.FC = () => {
  return (
    <Container type="light-border">
      <section>
        {/* top button */}
        <div className={"btn_container"}>
          <CustomButton
            txtColor={"#fff"}
            bgColor={"#009FE3"}
            btnValue={"Counter manager"}
          />
        </div>
        {/* cards section */}
        <div className="cards_container">
          <Card
            head="Total Inbounds"
            number="10"
            desc="+ Increased by 30% since July 2022"
            icon="bxs:memory-card"
          />
          <Card
            head="Dispensed inbounds"
            number="5"
            desc="+ Increased by 30% since July 2022"
            icon="bxs:memory-card"
          />
          <Card
            head="Pending inbounds"
            number="5"
            desc="- Decreased by 30% since July 2022"
            icon="bxs:memory-card"
          />
        </div>
        {/* bottom button */}
        <div className={"btn_container"}>
          {/* <CustomButton 
          btnValue={'View custom report'}
        /> */}
          <button className={classes.btn}>
            <Link to="/inbounds/view-report">View custom report</Link>
          </button>
        </div>
        {/* table section */}
        <CustomTable />
      </section>
    </Container>
  );
};

export default Inbounds;
