import { BsFilter } from "react-icons/bs";
import { useState } from "react";
import { data } from "../constants/payments";
import PaymentsTable from "../components/PaymentsTable";
import Footer from "../components/Footer";

const Payments = () => {
  const [payments, setPayments] = useState(data);
  const [category, setCategory] = useState("all payments");

  const filterData = (category: string) => {
    const filteredData = data.filter(
      payment => payment.status.toLowerCase() === category
    );
    setCategory(category);
    setPayments(filteredData);
  };

  return (
    <>
      <section className="px-32 py-16">
        <h3 className="font-bold text-2xl ">Payments Manager</h3>
        <div className="w-full border-2 border-slate-300 rounded-md px-6  mt-12 h-[75vh] overflow-x-visible overflow-y-auto">
          <div className="flex justify-between items-center  bg-white z-10 pt-6">
            <div className="flex justify-between items-center p-2 bg-[#DCEDF5] text-white rounded-full w-[40%]">
              <span
                onClick={() => {
                  setPayments(data);
                  setCategory("all payments");
                }}
                className={`p-3 text-base text-center rounded-full w-1/3 cursor-pointer  ${
                  category === "all payments" && `bg-[#009FE3]`
                }`}
              >
                All Payments
              </span>
              <span
                onClick={() => {
                  filterData("paid");
                }}
                className={`p-3 text-base text-center rounded-full w-1/3 cursor-pointer  ${
                  category === "paid" && `bg-[#009FE3]`
                }`}
              >
                Paid
              </span>
              <span
                onClick={() => {
                  filterData("pending");
                }}
                className={`p-3 text-base text-center rounded-full w-1/3 cursor-pointer  ${
                  category === "pending" && `bg-[#009FE3]`
                }`}
              >
                Pending
              </span>
            </div>
            <div className="w-[100px] border border-formBlue rounded-full flex text-formBlue justify-around items-center p-2 mr-6 cursor-pointer text-base">
              <span>
                <BsFilter />
              </span>
              filter
            </div>
          </div>
          <PaymentsTable payments={payments} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Payments;
