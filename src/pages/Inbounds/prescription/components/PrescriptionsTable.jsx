import PrescriptionsTableRow from "./PrescriptionsTableRow";

/**
 * Accepts data that will be map over to create a table
 * also accepts the filterBy parameter
 * @param {array} prescriptions
 * @param {string} filterBy
 * @returns {jsx}
 */

function PrescriptionsTable({ prescriptions, filterBy }) {
  return (
    <table className="mt-24">
      <thead>
        <tr>
          <th className="w-[200px] mr-3 ">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-#009fe3 h-5 w-5 border border-[#009fe3] rounded-md mr-2"
              />

              <label htmlFor="prescription" className="">
                Prescription ID
              </label>
            </div>
          </th>
          <th>Date</th>
          <th>Client Name</th>
          <th>Location</th>
          <th>Status</th>
          <th className="w-[60px]"></th>
        </tr>
      </thead>
      <tbody className="">
        {prescriptions.map((prescription, index) => (
          <PrescriptionsTableRow
            key={prescription.id + index}
            prescription={prescription}
            filterBy={filterBy}
          />
        ))}
      </tbody>
    </table>
  );
}

export default PrescriptionsTable;
