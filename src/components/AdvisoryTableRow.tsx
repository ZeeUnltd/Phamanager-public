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
    <tr
      key={advisory.id}
      className="hover:shadow-md hover:shadow-black py-6 capitalize"
    >
      <td className="flex items-center text-base">
        <input
          type="checkbox"
          className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-#009fe3 h-5 w-5 border border-[#009fe3] rounded-md mr-2"
        />

        <label htmlFor="advisory" className="text-[#009fe3]">
          {advisory.id}
        </label>
      </td>
      <td className="text-base">{advisory.date}</td>
      <td className="text-base">{advisory.PharmacyName}</td>
      <td className="text-base">{advisory.lastUpdate}</td>

      <td className="">
        <p
          className={` p-2 border-2 rounded-full text-center text-base  ${
            advisory.status.toLocaleLowerCase() === "dispensed" &&
            `bg-[#9FF1CA]  border-[#21A273]`
          } ${
            advisory.status.toLocaleLowerCase() === "pending" &&
            `bg-[#ffe4b1] text-[#ffb82e] border-[#ffb82e]`
          }  `}
        >
          {advisory.status}
        </p>
      </td>
      <td className="flex justify-center items-center w-[350px]">
        {/* <OptionButton options={options} /> */}
        hgfgh
      </td>
    </tr>
  );
}

export default AdvisoryTableRow;
