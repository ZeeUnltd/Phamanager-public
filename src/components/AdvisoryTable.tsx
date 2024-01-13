import AdvisoryTableRow from "./AdvisoryTableRow";

type Advisory = {
  id: string;
  date: string;
  PharmacyName: string;
  lastUpdate: string;
  status: string;
};

type AdvisoryTableProps = {
  advisories: Advisory[];
};

function AdvisoryTable({ advisories }: AdvisoryTableProps) {
  return (
    <div className="w-full my-8">
      <div className="flex items-center justify-between font-bold text-black text-base px-2 py-6">
        <div className="w-[18%]">
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
        <div className="w-[21%]">Date</div>
        <div className="w-[21%]">Pharmacy Name</div>
        <div className="w-[15%]">Last update </div>
        <div className="w-[15%]">Status</div>
        <div className="w-[10%]"></div>
      </div>

      <div className="">
        {advisories.map((advisory: Advisory, index: number) => (
          <AdvisoryTableRow key={advisory.id + index} advisory={advisory} />
        ))}
      </div>
    </div>
  );
}

export default AdvisoryTable;
