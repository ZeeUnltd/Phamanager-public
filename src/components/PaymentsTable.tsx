import PaymentsTableRow from "./PaymentsTableRow";

type Payments = {
  id: string;
  date: string;
  pharmacyName: string;
  items: string;
  status: string;
  amount: string;
};

type PaymentsTableProps = {
  payments: Payments[];
};

function PaymentsTable({ payments }: PaymentsTableProps) {
  return (
    <div className="w-full my-8">
      <div className="flex items-center justify-between font-bold text-black text-base px-2 py-6">
        <div className="w-[15%]">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-#009fe3 h-5 w-5 border border-[#009fe3] rounded-md"
            />

            <label htmlFor="orderID" className="text-base">
              Ticket ID
            </label>
          </div>
        </div>
        <div className="w-[16%]">Date</div>
        <div className="w-[17%]">Pharmacy Name</div>
        <div className="w-[20%]">Items</div>
        <div className="w-[10%]">Amount</div>
        <div className="w-[10%]">Status</div>
        <div className="w-[7%]"></div>
      </div>

      <div className="">
        {payments.map((payment: Payments, index: number) => (
          <PaymentsTableRow key={payment.id + index} payment={payment} />
        ))}
      </div>
    </div>
  );
}

export default PaymentsTable;
