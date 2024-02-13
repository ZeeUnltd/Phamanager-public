import { BsArrowDownLeftCircleFill } from "react-icons/bs";
// import { BsArrowDownRightCircleFill } from "react-icons/bs";

const InventoryItem = () => {
  return (
    <div className="flex justify-between items-center py-2 border-b-2">
      <div className="flex items-center gap-16">
        <BsArrowDownLeftCircleFill color="green" size="2rem" />
        <span className="flex flex-col gap-2">
          <p className="text-[18px] font-semibold">
            Addition to inventory - Emzor Paracetamol{" "}
          </p>
          <p className="text-[15px] font-medium text-[#b1b1b4]">
            Fri Jun 15,2022 GMT 13:00
          </p>
        </span>
      </div>
      <div className="font-medium">2 packs</div>
    </div>
  );
};

export default InventoryItem;
