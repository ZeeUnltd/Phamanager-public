import { useState } from "react";
import { BsFilter } from "react-icons/bs";
import PresHeader from "./components/Header";
import { testData } from "./utils/TestData";
import PrescriptionsTable from "./components/PrescriptionsTable";


// creating new variables from filtering Prescriptions base on prescription Status

const availablePrescriptions = testData.filter(
  (prescription) => prescription.accepted === false
);
const quotedPrescriptions = testData.filter(
  (prescription) => prescription.quotedStatus.toLowerCase() === "quoted"
);
const acceptedPrescriptions = quotedPrescriptions.filter(
  (prescription) => prescription.accepted === true
);

const PrescriptionsManager = () => {
  const [filterBy, setFilterBy] = useState("available");
  const [prescriptions, setPrescriptions] = useState(testData);

  return (
    <>
      {/* Header */}
      <PresHeader title={"Prescriptions Manager"} linkTo={"/inbounds/checkout"}/>

      {/* Main */}
      <section className="relative">

        {/* Sub Header */}
        <div className="font-semibold text-xl text-slate-300 absolute -top-5">
          All Prescriptions
        </div>
        <br />

      {/* Filter Nav */}
        <div className="w-full border-2 border-slate-300 rounded-md px-6 pb-6 h-[75vh] overflow-x-visible overflow-y-auto">
          <div className="flex justify-between items-center fixed w-[1050px] bg-white z-10 pt-6">
            <div className="flex justify-between items-center p-2 bg-[#DCEDF5] text-white rounded-full w-[60%]">
              <span
                onClick={() => {
                  setFilterBy("available");
                  setPrescriptions(availablePrescriptions);
                }}
                className={`p-3 text-sm text-center rounded-full w-1/3 cursor-pointer  ${
                  filterBy === "available" && `bg-[#009FE3]`
                }`}
              >
                Available Prescriptions
              </span>
              <span
                onClick={() => {
                  setFilterBy("quoted");
                  setPrescriptions(quotedPrescriptions);
                }}
                className={`p-3 text-sm text-center rounded-full w-1/3 cursor-pointer  ${
                  filterBy === "quoted" && `bg-[#009FE3]`
                }`}
              >
                Quoted Prescriptions
              </span>
              <span
                onClick={() => {
                  setFilterBy("accepted");
                  setPrescriptions(acceptedPrescriptions);
                }}
                className={`p-3 text-sm text-center rounded-full w-1/3 cursor-pointer  ${
                  filterBy === "accepted" && `bg-[#009FE3]`
                }`}
              >
                Accepted Quotes
              </span>
            </div>
            <div className="w-[100px] border border-[#009FE3] rounded-full flex text-[#009fe3] justify-around items-center p-2 mr-6 cursor-pointer">
              <span>
                <BsFilter />
              </span>
              filter
            </div>
          </div>
          {/* Prescriptions Table */}
          <PrescriptionsTable
            prescriptions={prescriptions}
            filterBy={filterBy}
          />
        </div>
      </section>
    </>
  );
}

export default PrescriptionsManager;
