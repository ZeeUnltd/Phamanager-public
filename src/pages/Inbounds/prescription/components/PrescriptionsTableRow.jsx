import OptionButton from "./OptionButton"
import { availableOptions, acceptedPendingOptions, accepteddispensedOptions } from "../utils/prescriptionTableOptionButtonData"

/**
 * Accepts the an object with the following properties:
 * {
 * id,
 * date,
 * clientName,
 * location,
 * quotedStatus,
 * dispensedStatus,
 * accepted,
 * }
 *  and a filter by parameter
 * @param {object} prescription  
 * @param {string} filterBy  
 * @returns {jsx}
 */
function PrescriptionsTableRow({prescription, filterBy}) {

    return (
        
            <tr
              key={prescription.id}
              className="hover:shadow-md hover:shadow-black py-6 capitalize"
            >
              <td className="flex items-center  w-[150px] mr-3 text-sm">
                <input
                  type="checkbox"
                  className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-#009fe3 h-5 w-5 border border-[#009fe3] rounded-md mr-2"
                />

                <label htmlFor="prescription" className="text-[#009fe3]">
                  {prescription.id}
                </label>
              </td>
              <td className=" flex justify-start items-center w-[155px] mr-3 text-sm">
                {prescription.date}
              </td>
              <td className=" flex justify-start items-center w-[150px] mr-3 text-sm">
                {prescription.clientName}
              </td>
              <td className=" flex justify-start items-center w-[150px] mr-3 text-sm">
                {prescription.location}
              </td>
              {filterBy === "available" && (
                <>
                  {" "}
                  <td className="w-[120px] mr-3 text-sm">
                    <p
                      className={` p-2 border-2 rounded-full text-center ${
                        prescription.quotedStatus.toLocaleLowerCase() ===
                          "quoted" &&
                        `bg-[#eabeb1] text-[#c34722] border-[#c34722]`
                      } ${
                        prescription.quotedStatus.toLocaleLowerCase() ===
                          "pending" &&
                        `bg-[#ffe4b1] text-[#ffb82e] border-[#ffb82e]`
                      } `}
                    >
                      {prescription.quotedStatus}
                    </p>
                  </td>
                  <th className="w-[100px] flex justify-center items-center b">
                    <OptionButton options={availableOptions} />
                  </th>
                </>
              )}
              {filterBy === "quoted" && (
                <>
                  {" "}
                  <td className="w-[120px] mr-3 text-sm">
                    <p
                      className={` p-2 border-2 rounded-full text-center  ${
                        prescription.dispensedStatus.toLocaleLowerCase() ===
                          "dispensed" && `bg-[#9FF1CA]  border-[#21A273]`
                      } ${
                        prescription.dispensedStatus.toLocaleLowerCase() ===
                          "pending" &&
                        `bg-[#eabeb1] text-[#c34722] border-[#c34722]`
                      } `}
                    >
                      {prescription.dispensedStatus === "pending"
                        ? prescription.quotedStatus
                        : prescription.dispensedStatus}
                    </p>
                  </td>
                  <th className="w-[100px] flex justify-center items-center">
                    <OptionButton options={accepteddispensedOptions} />
                  </th>
                </>
              )}

              {filterBy === "accepted" && (
                <>
                  {" "}
                  <td className="w-[120px] mr-3 text-sm">
                    <p
                      className={` p-2 border-2 rounded-full text-center  ${
                        prescription.dispensedStatus.toLocaleLowerCase() ===
                          "dispensed" && `bg-[#9FF1CA]  border-[#21A273]`
                      } ${
                        prescription.dispensedStatus.toLocaleLowerCase() ===
                          "pending" &&
                        `bg-[#ffe4b1] text-[#ffb82e] border-[#ffb82e]`
                      } `}
                    >
                      {prescription.dispensedStatus}
                    </p>
                  </td>
                  <th className="w-[100px] flex justify-center items-center">
                    {prescription.dispensedStatus.toLowerCase() ===
                    "pending" ? (
                      <OptionButton options={acceptedPendingOptions} />
                    ) : (
                      <OptionButton options={accepteddispensedOptions} />
                    )}
                  </th>
                </>
              )}
            </tr>
          
    )
}

export default PrescriptionsTableRow
