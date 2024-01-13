import ApplicationTableRow from "./ApplicationTableRow";

type Applications = {
  id: string;
  date: string;
  pharmacyName: string;
  items: number;
  status: string;
  amount: string;
};

type ApplicationsTableProps = {
  applications: Applications[];
};

const ApplicationTable = ({ applications }: ApplicationsTableProps) => {
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
              Order ID
            </label>
          </div>
        </div>
        <div className="w-[20%]">Date</div>
        <div className="w-[20%]">Pharmacy Name</div>
        <div className="w-[10%]">Items</div>
        <div className="w-[10%]">Amount</div>
        <div className="w-[13%]">Status</div>
        <div className="w-[7%]"></div>
      </div>

      <div className="">
        {applications.map((application: Applications, index: number) => (
          <ApplicationTableRow
            key={application.id + index}
            application={application}
          />
        ))}
      </div>
    </div>
  );
};

export default ApplicationTable;
