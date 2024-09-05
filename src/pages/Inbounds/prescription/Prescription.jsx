import Card from "../../../components/Cards/card";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CustomTable from "../../../components/Tables/Table";
import ManagerButton from "./components/ManagerButton";
import PresHeader from "./components/presHeader";



function Prescription() {
  const params = useParams();
  const uniqueID = params.id;

  const managerButtonInput = {
    firstValue: "Source Prescriptions",
    firstLink:
      `/dashboard/${ uniqueID }/inbounds/prescriptions/source-prescriptions`,
    secondValue: "Marketplace Uploads",
    secondLink: `/dashboard/${ uniqueID }/inbounds/prescriptions/prescriptions-manager`,
  };

  return (
    <>
      <PresHeader title={"Prescription"} linkTo={"/inbounds/checkout/"} presCart={[]} />

      <section className="pr-14">
        {/* top button */}
        <div className={"btn_container"}>
          <ManagerButton
            title={"Prescriptions Manager"}
            inputValue={managerButtonInput}
          />
        </div>
        <div className="relative mb-[80px]">
          {/* Card s */}
          <div className="flex gap-6">
            <Card
              head="Total Prescriptions"
              number="10"
              desc="+ Increased by 30% since July 2022"
              icon="bxs:memory-card"
            />
            <Card
              head="Dispensed Prescriptions"
              number="5"
              desc="+ Increased by 30% since July 2022"
              icon="bxs:memory-card"
            />
            <Card
              head="Sourced Prescriptions"
              number="5"
              desc="- Decreased by 30% since July 2022"
              icon="bxs:memory-card"
            />
          </div>
          <div className="absolute right-0 -bottom-14 p-2 w-[200px] h-[40px] cursor-pointer text-center border text-[#54A4CC] border-[#54A4CC] rounded-md transition-all ">
            <Link to="/inbounds/view-report">View custom report</Link>
          </div>
        </div>
        <div>
          <CustomTable />
        </div>
      </section>
    </>
  );
}

export default Prescription;
