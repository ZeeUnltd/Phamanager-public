import OptionButton from "./OptionButton";
import { options } from "../constants/payments";

type Advisory = {
  id: string;
  date: string;
  PharmacyName: string;
  lastUpdate: string;
  status: string;
};
type AdvisoryTableRowProps = {
  advisory: Advisory;
};

function AdvisoryTableRow({ advisory }: AdvisoryTableRowProps) {
  return (
    <div
      key={advisory.id}
      className="hover:shadow-sm hover:shadow-text py-6 px-2 capitalize flex items-center justify-between text-[16px] text-text"
    >
      <div className="w-[18%] flex items-center gap-2">
        <input
          type="checkbox"
          className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-#009fe3 h-5 w-5 border border-[#009fe3] rounded-md"
        />

        <label htmlFor="advisory" className="text-[#009fe3]">
          {advisory.id}
        </label>
      </div>
      <div className="w-[21%]">{advisory.date}</div>
      <div className="w-[21%]">{advisory.PharmacyName}</div>
      <div className="w-[15%]">{advisory.lastUpdate}</div>

      <div className="w-[15%] ">
        <p
          className={`p-2 border-2 rounded-full text-center text-base ${
            advisory.status.toLocaleLowerCase() === "dispensed" ||
            ("paid" && `bg-[#9FF1CA]  border-[#21A273]`)
          } ${
            advisory.status.toLocaleLowerCase() === "pending" &&
            `bg-[#ffe4b1] text-[#ffb82e] border-[#ffb82e]`
          }`}
        >
          {advisory.status}
        </p>
      </div>
      <div className="flex justify-center items-center w-[10%]">
        {/* <OptionButton options={options} /> */}
      </div>
    </div>
  );
}

export default AdvisoryTableRow;
