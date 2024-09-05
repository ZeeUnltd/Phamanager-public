import { Link} from "react-router-dom";
import useImageZoom from "./hook/useImageZoom,";
import PresHeader from "./components/presHeader";
import { useParams } from "react-router-dom";

function PrescriptionDetails() {
 
 const param = useParams();
 const uniqueID = param.id;
  
  
  const [zoomStyles, handlers] = useImageZoom()

    return (
    <>
    <PresHeader title={'Prescriptions'} subtitle={'view prescriptions'} linkTo={'/inbounds/checkout'} presCart={[]}/>
    <section className="w-full border-2 border-[#009fe3]  py-6 px-12">
      <div className="flex">
        <div className="w-[60%] mt-20">
          <img src="/prescriptionDetails.png"  alt="prescription details"
          onClick={handlers.resetZoom}
          style={{...zoomStyles}}
          />
        </div>
        <div className="relative w-[40%]">
         { <Link to={`/dashboard/${uniqueID}/inbounds/prescription/create-invoice`}>
         <p className="p-2 bg-[#009fe3] text-white w-[200px] rounded-md text-center absolute right-0 cursor-pointer">
            Quote Prescription 
          </p>
         </Link>}
          <div className="flex items-center gap-3 absolute top-[100px] right-0">
            <p>
              zoom size: <span>{`${handlers.zoomNumber} %`}</span>
            </p>
            <button onClick={handlers.zoomOut} className="w-8 text-center bg-[#009fe3] text-white rounded-md">
              -
            </button>
            <button onClick={handlers.zoomIn} className="w-8 text-center bg-[#009fe3] text-white rounded-md">
              +
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default PrescriptionDetails;
