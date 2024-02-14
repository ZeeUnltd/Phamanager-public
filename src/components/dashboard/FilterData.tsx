import { drugCategories } from "../../constants";
import { CiSearch } from "react-icons/ci";

const FilterData = () => {
  return (
    <div className="absolute right-0 top-12 border-2 bg-white w-[490px] p-3 rounded-xl">
      <h2 className="text-text text-[18px] font-semibold">Filter</h2>
      <p className="text-text text-[14px] font-normal py-4">Filter category</p>
      <section className="flex flex-wrap gap-3">
        {drugCategories.map(category => (
          <span
            key={category.id}
            className="p-2 my-1 border-2 rounded-3xl text-text text-[14px] font-semibold cursor-pointer hover:bg-formBlue hover:text-white"
          >
            {category.title}
          </span>
        ))}
      </section>
      <p className="text-text text-[14px] font-normal py-4">Filter search</p>
      <p className="w-[40%] flex gap-3 p-2 border-2 rounded-3xl text-text text-[14px] font-semibold">
        <CiSearch size="1.5rem" />
        Search keyword
      </p>
      <p className="text-text text-[14px] font-normal py-4">Filter date</p>
      <span className="flex items-center gap-4">
        <p className="text-text text-[14px] font-normal">From</p>
        <p className="text-text text-[14px] font-semibold py-2 px-3 border-2 rounded-3xl">
          DD-MM-YYYY
        </p>
        <p className="text-text text-[14px] font-normal">To</p>
        <p className="text-text text-[14px] font-semibold py-2 px-3 border-2 rounded-3xl">
          DD-MM-YYYY
        </p>
      </span>
      <div className="my-4">
        <button className="w-full rounded-3xl bg-formBlue text-white p-2">
          Apply filter
        </button>
      </div>
    </div>
  );
};

export default FilterData;
