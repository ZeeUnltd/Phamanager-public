import PrescriptionTableRow from "./PrescriptionTableRow";

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

type PrescriptionTableProps = {
  prescriptions: Prescription[];
  filterBy: string;
};

const PrescriptionsTable = ({
  prescriptions,
  filterBy,
}: PrescriptionTableProps) => {
  return (
    <div className="w-full my-8">
      <div className="flex items-center justify-start font-bold text-black text-base px-2 py-6">
        <div className="w-[15%] flex items-center gap-2">
          <input
            type="checkbox"
            className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-#009fe3 h-5 w-5 border border-[#009fe3] rounded-md"
          />

          <label htmlFor="orderID" className="text-base">
            Order ID
          </label>
        </div>

        <div className="w-[20%]">Date</div>
        <div className="w-[20%]">Pharmacy Name</div>
        <div className="w-[20%]">Prescription Upload Name</div>
        <div className="w-[10%]">Amount</div>
        <div className="w-[10%]">Status</div>
        <div className="w-[5%]"></div>
      </div>

      <div className="">
        {prescriptions.map((prescription: Prescription, index: number) => (
          <PrescriptionTableRow
            key={prescription.id + index}
            prescription={prescription}
            filterBy={filterBy}
          />
        ))}
      </div>
    </div>
  );
};

export default PrescriptionsTable;
