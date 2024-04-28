import OptionButton from "../OptionButton";
import { quotedOptions, otherOptions } from "../../constants/application";

type Applications = {
  id: string;
  date: string;
  pharmacyName: string;
  items: number;
  status: string;
  amount: string;
};

type ApplicationsTableProps = {
  application: Applications;
};

const ApplicationTableRow = ({ application }: ApplicationsTableProps) => {
  return (
    <div
      key={application.id}
      className="hover:shadow-sm hover:shadow-text py-6 px-2 capitalize flex items-center justify-between text-[16px] text-text"
    >
      <div className="w-[15%] flex items-center gap-2">
        <input
          type="checkbox"
          className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-#009fe3 h-5 w-5 border border-[#009fe3] rounded-md"
        />

        <label htmlFor="applications" className="text-[#009fe3]">
          {application.id}
        </label>
      </div>
      <div className="w-[20%]">{application.date}</div>
      <div className="w-[20%]">{application.pharmacyName}</div>
      <div className="w-[10%]">{application.items}</div>
      <div className="w-[10%]">{application.amount}</div>

      <div className="w-[13%] ">
        <p
          className={`p-2 border-2 rounded-full text-center text-base ${
            application.status.toLocaleLowerCase() === "dispensed" &&
            `bg-[#9FF1CA]  border-[#15A273]`
          } ${
            application.status.toLocaleLowerCase() === "pending" &&
            `bg-[#ffe4b1] text-[#ffb82e] border-[#ffb82e]`
          } ${
            application.status.toLocaleLowerCase() === "quoted" &&
            `bg-[#eabeb1] text-[#c34722] border-[#c34722]`
          }`}
        >
          {application.status}
        </p>
      </div>
      <div className="flex justify-center items-center w-[7%]">
        {/* {application.status.toLowerCase() === "quoted" ? (
          <OptionButton options={quotedOptions} />
        ) : (
          <OptionButton options={otherOptions} />
        )} */}
      </div>
    </div>
  );
};

export default ApplicationTableRow;
