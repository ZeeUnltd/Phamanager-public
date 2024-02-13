import emptyShelfImg from "../../assets/images/dashboard/empty-counter.svg";

type props = {
  title1: string;
  title2: string;
  title3: string;
};

const EmptyShelf = (props: props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center justify-start my-16">
        <img src={emptyShelfImg} alt="empty" className="w-[200px] h-[210px]" />
        <p className="text-center text-[12px] text-[#4b4b4b] font-bold">
          {props.title1}
        </p>
        <span>
          <p className="text-center text-[12px] text-[#4b4b4b] font-medium">
            {props.title2}
          </p>
          <p className="text-center text-[10px] text-[#4b4b4b] font-normal">
            {props.title3}
          </p>
        </span>
      </div>
    </div>
  );
};

export default EmptyShelf;
