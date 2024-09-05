import { useState } from "react";
import Header from "../components/Header";
import { Stepper } from "../components/Stepper";
import { TbCurrencyNaira } from "react-icons/tb";
import ApplicantInfoForm from "../components/ApplicantInfoForm";
// import Cart from "../components/Cart";
import CartComp from "../components/CartComp/CartComp";
import DispensaryCounterSlide from "../components/DispensaryCounterSlide";

const steps = ['Cart', "KYC", "Review", "Payment", "Complete"];

function CartToKYC({ setDisplay }) {
  //KYC Stepper Varibles
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  //Applicant Type Varible (either individual or corporate organization)
  const [applicantType, setApplicantType] = useState("Individual");

  //Individual applicant Variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("Male");
  const [NIN, setNIN] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [healthFacility, setHealthFacility] = useState("");
  const [recurringDelivery, setRecurringDelivery] = useState("");
  const [allergies, setAllergies] = useState("");
  const [frequency, setFrequency] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [duration, setDuration] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [inspectionDate, setInspectionDate] = useState("");

  //Corporate Organization applicant Variables
  const [enterpriseName, setEnterpriseName] = useState("");
  const [enterpriseSector, setEnterpriseSector] = useState("");
  const [incorporationNumber, setIncorporationNumber] = useState("");
  const [IncorporationDate, setIncorporationDate] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactPersonJob, setContactPersonJob] = useState("");
  const [purposeofPurchase, setPurposeofPurchase] = useState("");



  //Handling Form Submit
  function handleSubmit(e) {
    e.preventDefault();
    setCurrentStep(3);
  }
  return (
    <section className=" px-48 pb-32 pt-12">
      <Header
        title={"Dispensary counter"}
      />

      <main>
        <h3 className="font-semibold text-3xl mb-12">Cart checkout</h3>
        <div className="flex justify-center items-center">
          {/* KYC Stepper */}
          <Stepper
            currentStep={currentStep}
            complete={complete}
            steps={steps}
          />
        </div>

        {/* Dispensary counter details including product details, quantity and price */}
        {currentStep !== 1 && <><DispensaryCounterSlide /></>}

        {currentStep === 1 && <CartComp
         setCurrentStep={setCurrentStep}
         onClick={() => setCurrentStep(2)}
        />}

        {/* Display this UI when the  KYC current step is 1 */}
        {currentStep === 2 && (
          <ApplicantInfoForm
            handleSubmit={handleSubmit}
            applicantType={applicantType}
            setApplicantType={setApplicantType}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            gender={gender}
            setGender={setGender}
            NIN={NIN}
            setNIN={setNIN}
            dateOfBirth={dateOfBirth}
            setDateOfBirth={setDateOfBirth}
            healthFacility={healthFacility}
            setHealthFacility={setHealthFacility}
            recurringDelivery={recurringDelivery}
            setRecurringDelivery={setRecurringDelivery}
            allergies={allergies}
            setAllergies={setAllergies}
            frequency={frequency}
            setFrequency={setFrequency}
            deliveryAddress={deliveryAddress}
            setDeliveryAddress={setDeliveryAddress}
            duration={duration}
            setDuration={setDuration}
            enterpriseName={enterpriseName}
            setEnterpriseName={setEnterpriseName}
            enterpriseSector={enterpriseSector}
            setEnterpriseSector={setEnterpriseSector}
            incorporationNumber={incorporationNumber}
            setIncorporationNumber={setIncorporationNumber}
            IncorporationDate={IncorporationDate}
            setIncorporationDate={setIncorporationDate}
            contactNumber={contactNumber}
            setContactNumber={setContactNumber}
            inspectionDate={inspectionDate}
            setInspectionDate={setInspectionDate}
            contactPerson={contactPerson}
            setContactPerson={setContactPerson}
            contactPersonJob={contactPersonJob}
            setContactPersonJob={setContactPersonJob}
            purposeofPurchase={purposeofPurchase}
            setPurposeofPurchase={setPurposeofPurchase}
          />
        )}

        {/* Display this UI when the KYC current step is 2.
        this page displays the applicant information inputed from the previous page
      */}
        {currentStep === 3 && (
          <div>
            <h3 className=" text-3xl mt-20 mb-16">Applicant Informations</h3>
            <div className="flex flex-col gap-8 w-[65%]">
              {applicantType === "Individual" && (
                <>
                  <div className="flex flex-col gap-4 w-2/5">
                    <p className="text-xl">Applicant type</p>
                    <p className=" ">{applicantType}</p>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Applicant Name</p>
                      <p className=" ">{firstName}</p>
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="">{lastName}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 w-2/5">
                    <p className="text-xl">Applicant gender</p>
                    <p className=" ">{gender}</p>
                  </div>

                  <div className="flex flex-col gap-4 w-2/5">
                    <p className="text-xl">Applicant NIN</p>
                    <p className=" ">{NIN}</p>
                  </div>

                  <div className="flex flex-col gap-4 w-2/5">
                    <p className="text-xl">Applicant Birth Date</p>
                    <p className="  uppercase">{dateOfBirth}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Prescribing health facility</p>
                      <p className=" ">{healthFacility}</p>
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Recurring delivery frequency</p>
                      <p className=" ">{recurringDelivery}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Allergies</p>
                      <p className=" ">{allergies}</p>
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Frequency</p>
                      <p className=" ">{frequency}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Delivery address</p>
                      <p className=" ">{deliveryAddress}</p>
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Duration</p>
                      <p className=" ">{duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Contact phone number</p>
                      <p className=" ">{contactNumber}</p>
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Potential inspection date</p>
                      <p className="  uppercase">{inspectionDate}</p>
                    </div>
                  </div>
                </>
              )}
              {/* if applicatant type is corporate organization and KYC step is 2 display this UI */}
              {applicantType === "Corporate Organization" && (
                <>
                  <div className="flex flex-col gap-4 w-2/5">
                    <p className="text-xl">Applicant type</p>
                    <p className=" ">{applicantType}</p>
                  </div>

                  <div className="flex flex-col gap-4 w-2/5">
                    <p className="text-xl">Enterprise Name</p>
                    <p placeholder="Enterprise Name" className=" ">
                      {enterpriseName}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 w-2/5">
                    <p className="text-xl">Enterprise sector</p>
                    <p className=" ">{enterpriseSector} </p>
                  </div>
                  <div className="flex flex-col gap-4 w-2/5">
                    <p className="text-xl">Applicant incorporation number</p>
                    <p className=" ">{incorporationNumber}</p>
                  </div>
                  <div className="flex flex-col gap-4 w-2/5">
                    <p className="text-xl">Applicant incorporation date</p>
                    <p className=" ">{IncorporationDate}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Contact person</p>
                      <p className=" ">{contactPerson}</p>
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Contact person job title</p>
                      <p className=" ">{contactPersonJob}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 w-2/5">
                    <p className="text-xl">Purpose of purchase to applicant</p>
                    <p className=" ">{purposeofPurchase}</p>
                  </div>
                </>
              )}
              <div className="flex gap-6 justify-end mt-12">
                <button
                  className="text-xl p-3 hover:bg-formBlue text-formBlue rounded-md w-[200px] text-center hover:text-white  border-2 border-formBlue "
                  onClick={() => setCurrentStep(1)}
                >
                  Edit
                </button>

                <button
                  className="text-xl p-3 bg-formBlue text-white rounded-md w-[200px] text-center hover:text-formBlue hover:bg-transparent border-2 border-formBlue "
                  onClick={() => setCurrentStep(4)}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <>
            <div className="mt-24">
              <div className="border-2 border-[#62909F] m-auto  w-[80%] flex flex-col pb-7">
                <p className="p-7 bg-[#F5F5F5]">Total Fee</p>
                <div className="flex items-end">
                  <div className="w-[35%] px-7">
                    <p className=" py-3 ">Due Today</p>
                    <p className="  flex justify-start items-center text-2xl ">
                      <span>
                        <TbCurrencyNaira size={30} />
                      </span>
                      1,00,000
                    </p>
                  </div>
                  <div className="flex gap-6 justify-end mt-12">
                    <button
                      className=" py-3 px-12 bg-formBlue text-white rounded-md text-center hover:text-formBlue hover:bg-transparent border-2 border-formBlue "
                      onClick={() => {
                        setCurrentStep(5);
                        setComplete(true);
                      }}
                    >
                      Proceed to Payment
                    </button>
                    <button
                      className=" p-3 hover:bg-formBlue text-formBlue rounded-md w-[200px] text-center hover:text-white  border-2 border-formBlue "
                      onClick={() => setCurrentStep(2)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {currentStep === 5 && (
          <>
            <div className="w-[50%] text-2xl flex flex-col items-center m-auto mt-24">
              <div className="mb-12 ">
                <img
                  src="/images/circleCheck.png"
                  alt=""
                  className="w-[150px]"
                />
              </div>
              <div className="flex flex-col gap-6 items-center text-center">
                <p>Success!</p>
                <p>
                  {" "}
                  Your dispensary purchase for the above listed
                  medication/supply has been sent to the listing pharmacy.
                  Kindly await a response as soon as possible{" "}
                </p>
                <p>Thank you!</p>


              </div>
            </div>
          </>
        )}
      </main>
    </section>
  );
}

export default CartToKYC;
