import AdvisoryTableRow from "./AdvisoryTableRow";

type Advisory = {
  id: string;
  date: string;
  PharmacyName: string;
  lastUpdate: string;
  status: string;
};

type AdvisoryTableProps = {
  Advisories: Advisory[];
};

function AdvisoryTable({ Advisories }: AdvisoryTableProps) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-#009fe3 h-5 w-5 border border-[#009fe3] rounded-md mr-2"
              />

              <label htmlFor="orderID" className="text-base">
                Ticket ID
              </label>
            </div>
          </th>
          <th className="text-base">Date</th>
          <th className="text-base">Pharmacy Name</th>
          <th className="text-base">Last update </th>
          <th className="text-base">Status</th>
          <th className="w-[200px]"></th>
        </tr>
      </thead>
      <tbody className="">
        {Advisories.map((advisory: Advisory, index: number) => (
          <AdvisoryTableRow key={advisory.id + index} advisory={advisory} />
        ))}
      </tbody>
    </table>
  );
}

export default AdvisoryTable;
