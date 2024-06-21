import { useNavigate } from "react-router-dom";
import Header from "./components/Header";

function SourcePrescription() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/account/inbounds/prescriptions/prescription-details");
  }
  return (
    <>
      <Header title={"Prescription Manager"} linkTo={"/inbounds/checkout"}/>
      <section className="border-2 border-slate-300 rounded-lg p-16 h-[70vh] ml-10">
        <h3 className="text-3xl">Source Prescriptions</h3>
        <form
          action=""
          className="mt-12 w-[500px]"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between items-center">
            <label className="text-sm " htmlFor="prescription-id">
              Enter Prescription Number
            </label>
            <input
              type="text"
              id="prescription-id"
              className="border-2 border-[#009fe3] p-2 text-sm w-[300px] focus:outline-none"
              required
              placeholder="Enter Prescription Number"
            />
          </div>
          <div className="flex justify-end mt-20">
            <input
              type="submit"
              className="bg-[#009fe3] text-white rounded-md p-3 hover:bg-blue-400 text-sm w-[300px]"
              value={"Search Prescription"}
            />
          </div>
        </form>
      </section>
    </>
  );
}

export default SourcePrescription;
