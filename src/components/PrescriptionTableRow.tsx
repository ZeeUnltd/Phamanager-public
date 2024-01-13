import OptionButton from "./OptionButton";
import {
  availableOptions,
  acceptedPendingOptions,
  accepteddispensedOptions,
} from "../constants/prescription";

type Prescription = {
  id: string;
  date: string;
  uploadName: string;
  pharmacyName: string;
  dispensedStatus: string;
  quotedStatus: string;
  amount: number;
  accepted: boolean;
};

type PrescriptionTableRowProps = {
  prescription: Prescription;
  filterBy: string;
};
const PrescriptionTableRow = ({
  prescription,
  filterBy,
}: PrescriptionTableRowProps) => {
  return (
    <div
      key={prescription.id}
      className="hover:shadow-sm hover:shadow-text py-6 px-2 capitalize flex items-center justify-start text-[16px] text-text"
    >
      <div className="w-[15%] flex items-center gap-2">
        <input
          type="checkbox"
          className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-#009fe3 h-5 w-5 border border-[#009fe3] rounded-md"
        />

        <label htmlFor="prescriptions" className="text-[#009fe3]">
          {prescription.id}
        </label>
      </div>
      <div className="w-[20%]">{prescription.date}</div>
      <div className="w-[20%]">{prescription.pharmacyName}</div>
      <div className="w-[20%]">{prescription.uploadName}</div>
      <div className="w-[10%]">{prescription.amount}</div>

      {filterBy === "all prescriptions" && (
        <>
          <div className="w-[10%] text-sm">
            <p
              className={`p-2 border-2 rounded-full text-center text-base ${
                prescription.quotedStatus.toLocaleLowerCase() === "quoted" &&
                `bg-[#eabeb1] text-[#c34722] border-[#c34722]`
              } ${
                prescription.quotedStatus.toLocaleLowerCase() === "pending" &&
                `bg-[#ffe4b1] text-[#ffb82e] border-[#ffb82e]`
              } `}
            >
              {prescription.quotedStatus}
            </p>
          </div>
          <div className="w-[5%] flex justify-center items-center">
            <OptionButton options={availableOptions} />
          </div>
        </>
      )}
      {filterBy === "quotes" && (
        <>
          <div className="w-[10%] text-sm">
            <p
              className={`p-2 border-2 rounded-full text-center text-base  ${
                prescription.dispensedStatus.toLocaleLowerCase() ===
                  "dispensed" && `bg-[#9FF1CA]  border-[#21A273]`
              } ${
                prescription.dispensedStatus.toLocaleLowerCase() ===
                  "pending" && `bg-[#eabeb1] text-[#c34722] border-[#c34722]`
              } `}
            >
              {prescription.dispensedStatus === "pending"
                ? prescription.quotedStatus
                : prescription.dispensedStatus}
            </p>
          </div>
          <div className="w-[5%] flex justify-center items-center">
            <OptionButton options={accepteddispensedOptions} />
          </div>
        </>
      )}

      {filterBy === "delivered" && (
        <>
          {" "}
          <div className="w-[10%] text-sm">
            <p
              className={`p-2 border-2 rounded-full text-center text-base  ${
                prescription.dispensedStatus.toLocaleLowerCase() ===
                  "dispensed" && `bg-[#9FF1CA]  border-[#21A273]`
              } ${
                prescription.dispensedStatus.toLocaleLowerCase() ===
                  "pending" && `bg-[#ffe4b1] text-[#ffb82e] border-[#ffb82e]`
              } `}
            >
              {prescription.dispensedStatus}
            </p>
          </div>
          <div className=" flex justify-center items-center w-[5%]">
            {prescription.dispensedStatus.toLowerCase() === "pending" ? (
              <OptionButton options={acceptedPendingOptions} />
            ) : (
              <OptionButton options={accepteddispensedOptions} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PrescriptionTableRow;
