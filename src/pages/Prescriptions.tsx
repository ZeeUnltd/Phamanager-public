import { BsFilter } from "react-icons/bs";
import { useState } from "react";
import { data } from "../constants/prescription";
import PrescriptionsTable from "../components/PrescriptionsTable";
import Footer from "../components/Footer";

const quotedPrescriptions = data.filter(
  prescription => prescription.quotedStatus.toLowerCase() === "quoted"
);
const acceptedQuotes = quotedPrescriptions.filter(
  prescription => prescription.accepted === true
);
const deliveredQuotes = quotedPrescriptions.filter(
  prescription => prescription.accepted === true
);

const Prescriptions = () => {
  const [filterBy, setFilterBy] = useState("all prescriptions");
  const [prescriptions, setPrescriptions] = useState(data);

  return (
    <>
      <section className="px-32 py-16">
        <h3 className="font-bold text-2xl ">Prescriptions Manager</h3>

        <div className="w-full border-2 border-slate-300 rounded-md px-6 pb-6 my-12 h-[75vh] overflow-x-visible overflow-y-auto">
          <div className="flex justify-between items-center bg-white z-10 pt-6">
            <div className="flex justify-between items-center p-2 bg-[#DCEDF5] text-white rounded-full w-[60%]">
              <span
                onClick={() => {
                  setFilterBy("all prescriptions");
                  setPrescriptions(data);
                }}
                className={`p-3 text-base text-center rounded-full w-1/4 cursor-pointer  ${
                  filterBy === "all prescriptions" && `bg-[#009FE3]`
                }`}
              >
                All Prescriptions
              </span>
              <span
                onClick={() => {
                  setFilterBy("quotes");
                  setPrescriptions(quotedPrescriptions);
                }}
                className={`p-3 text-base text-center rounded-full w-1/4 cursor-pointer  ${
                  filterBy === "quotes" && `bg-[#009FE3]`
                }`}
              >
                Quotes
              </span>
              <span
                onClick={() => {
                  setFilterBy("accepted quotes");
                  setPrescriptions(acceptedQuotes);
                }}
                className={`p-3 text-base text-center rounded-full w-1/4 cursor-pointer  ${
                  filterBy === "accepted quotes" && `bg-[#009FE3]`
                }`}
              >
                Accepted Quotes
              </span>
              <span
                onClick={() => {
                  setFilterBy("delivered");
                  setPrescriptions(deliveredQuotes);
                }}
                className={`p-3 text-base text-center rounded-full w-1/4 cursor-pointer  ${
                  filterBy === "delivered" && `bg-[#009FE3]`
                }`}
              >
                Delivered
              </span>
            </div>
            <div className="w-[100px] border border-[#009FE3] rounded-full flex text-[#009fe3] justify-around items-center p-2 mr-6 cursor-pointer text-base">
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
      <Footer />
    </>
  );
};

export default Prescriptions;
