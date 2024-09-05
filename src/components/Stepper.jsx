import "./stepper.css";
import { FiCheck } from "react-icons/fi";

export const Stepper = ({ complete, currentStep, steps }) => {
  return (
    <>
      <div className="flex justify-between items-start w-[700px]">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active-step"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <FiCheck className="text-white" /> : i + 1}
            </div>
            <p className="text-gray-500 w-32  text-center text-base font-semibold">
              {step}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
