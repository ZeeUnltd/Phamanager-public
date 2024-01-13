import { BsFilter } from "react-icons/bs";
// import { useState } from "react";
import { data } from "../constants/advisory";
import AdvisoryTable from "../components/AdvisoryTable";
import Footer from "../components/Footer";

const Advisory = () => {
  // const [advisories, setAdvisories] = useState(data);

  return (
    <>
      <section className="px-32 py-16">
        <h3 className="font-bold text-2xl ">Advisory Manager</h3>
        <div className="w-full border-2 border-slate-300 rounded-md px-6  mt-12 h-[75vh] overflow-x-visible overflow-y-auto">
          <div className="flex justify-end items-center  bg-white z-10 pt-6">
            <div className="w-[100px] border border-formBlue rounded-full flex text-formBlue justify-around items-center p-2 mr-6 cursor-pointer text-base">
              <span>
                <BsFilter />
              </span>
              filter
            </div>
          </div>
          <AdvisoryTable advisories={data} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Advisory;
