import { Link } from "react-router-dom";
import Header from "../components/Header";

import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { useState } from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

function DrugDetails({ setDisplay }) {
  const navigate = useNavigate()
  const [imageSrc, setImageSrc] = useState("/svg/drugPic.svg");
  return (
    <section className="font-Euclid px-24 pb-32 pt-12">
      <Header
        title={"Inventory Summary"}
        previousPage={"search result"}
        setDisplay={setDisplay}
      />

      <div className="border-2 border-formBlue py-6">
        <div className="flex justify-between items-center px-16">
          <div className="flex flex-col gap-6 text-xl w-[50%]">
            <h4 className="text-2xl">Penicillin ointment</h4>
            <div className="flex justify-between">
              <p className="text-sm">3, Majekodunmi street, Oshodi, Lagos</p>
              <p className="text-sm">
                Listed by{" "}
                <span className="underline">RX Pharmaceuticals ltd</span>
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center text-xl gap-6">
            <Link to={""}>
              <button className="p-3 border-2 border-formBlue text-formBlue hover:bg-formBlue hover:text-white w-[220px] rounded-md">
                Contact for advice
              </button>
            </Link>
            <Link to={"/cart-to-KYC"}>
              <button
                onClick={() => setDisplay("buy now")}
                className="p-3 border-2 border-formBlue hover:text-formBlue bg-formBlue hover:bg-transparent text-white w-[220px] rounded-md"
              >
                Buy now
              </button>
            </Link>
          </div>
        </div>

        <div className="flex  items-start gap-24 px-16 py-12">
          <div>
            <img src={imageSrc} alt="" className="w-[281px]" />
            <div className="flex items-center justify-between gap-3 py-6">
              <button
                onClick={() => setImageSrc("/svg/drugPic.svg")}
                className=" rounded-md bg-gray-400 py-2 px-3 text-white hover:bg-formBlue"
              >
                <BsCaretLeftFill />
              </button>
              <img
                src="/svg/drugPic.svg"
                alt=""
                className="w-[40px] rounded-md"
              />
              <img
                src="/svg/drugPic.svg"
                alt=""
                className="w-[40px] rounded-md"
              />

              <button
                onClick={() => setImageSrc("/svg/drugPic.svg")}
                className=" rounded-md bg-gray-400 py-2 px-3 text-white hover:bg-formBlue"
              >
                <BsCaretRightFill />
              </button>
            </div>
          </div>
          <div>
            <h4 className="text-2xl">Pricing details</h4>
            <div className="mt-3 flex items-start gap-12">
              <div className="flex flex-col gap-6 py-3 bg-[#F5F5F5] w-[300px] h-[300px] px-4 border-2 shadow-lg">
                <p className="text-base">Price</p>
                <p className="flex justify-start items-center text-xl ">
                  <span>
                    <TbCurrencyNaira size={25} />
                  </span>
                  1,00,000
                </p>
                <p className="text-base mt-8">Availability</p>
                <p className="text-xl font-semibold">In stock</p>
              </div>
              <div className="flex flex-col gap-6 py-3 bg-[#F5F5F5] w-[300px] h-[200px] px-4 border border-[#62909F] ">
                <p className="text-base">Price</p>
                <p className="flex justify-start items-center text-xl ">
                  <span>
                    <TbCurrencyNaira size={25} />
                  </span>
                  1,00,000
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h4 className="text-2xl pl-16">Item Details</h4>
          <div className="border-b-2 mt-3" />
          <div className="grid grid-cols-4 px-16 pt-6 pb-32">
            <div className="flex flex-col gap-4">
              <p>Dosage strength</p>
              <p>200mg</p>
              <p>Chemical constituents</p>
              <p>Penicillin B.P</p>
              <p>Penicillin B.P</p>
              <p>Penicillin B.P</p>
              <p>Penicillin B.P</p>
            </div>
            <div className="flex flex-col gap-4">
              <p>Dosage frequency</p>
              <p>As prescribed</p>
            </div>
            <div className="flex flex-col gap-4">
              <p>Pack details</p>
              <p>1 tube</p>
              <p>Directions for use</p>
              <p>Swallow with water and lie down after use.</p>
            </div>
          </div>
        </div>

        <div className="">
          <h4 className="text-2xl pl-16">Manufacturer’s details</h4>
          <div className="border-b-2 mt-3" />
          <div className="grid grid-cols-4 px-16 pt-6 pb-32">
            <div className="flex flex-col gap-4">
              <p>Manufacturer</p>
              <p>Emzor Pharmaceuticals</p>
              <p>Country of production</p>
              <p>Nigeria</p>
              <p>Storage method</p>
              <p>Keep in a cold environment</p>
            </div>
            <div className="flex flex-col gap-4">
              <p>Date of production</p>
              <p>12/12/2021</p>
            </div>
            <div className="flex flex-col gap-4">
              <p>Expiry date</p>
              <p>12/12/2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DrugDetails;
