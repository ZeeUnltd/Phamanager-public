import OptionButton from "./OptionButton";
import { options } from "../constants/payments";

type Payments = {
  id: string;
  date: string;
  pharmacyName: string;
  items: string;
  status: string;
  amount: string;
};
type PaymentsTableRowProps = {
  payment: Payments;
};

function PaymentsTableRow({ payment }: PaymentsTableRowProps) {
  return (
    <div
      key={payment.id}
      className="hover:shadow-sm hover:shadow-text py-6 px-2 capitalize flex items-center justify-between text-[16px] text-text"
    >
      <div className="w-[15%] flex items-center gap-2">
        <input
          type="checkbox"
          className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-#009fe3 h-5 w-5 border border-[#009fe3] rounded-md"
        />

        <label htmlFor="Payments" className="text-[#009fe3]">
          {payment.id}
        </label>
      </div>
      <div className="w-[16%]">{payment.date}</div>
      <div className="w-[17%]">{payment.pharmacyName}</div>
      <div className="w-[20%]">{payment.items}</div>
      <div className="w-[10%]">{payment.amount}</div>

      <div className="w-[10%] ">
        <p
          className={`p-2 border-2 rounded-full text-center text-base ${
            payment.status.toLocaleLowerCase() === "paid" &&
            `bg-[#9FF1CA]  border-[#15A273]`
          } ${
            payment.status.toLocaleLowerCase() === "pending" &&
            `bg-[#ffe4b1] text-[#ffb82e] border-[#ffb82e]`
          }`}
        >
          {payment.status}
        </p>
      </div>
      <div className="flex justify-center items-center w-[7%]">
        <OptionButton options={options} />
      </div>
    </div>
  );
}

export default PaymentsTableRow;
