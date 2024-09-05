function ApplicantInfoForm({
    handleSubmit,
    applicantType,
    setApplicantType,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    gender,
    setGender,
    NIN,
    setNIN,
    dateOfBirth,
    setDateOfBirth,
    healthFacility,
    setHealthFacility,
    recurringDelivery,
    setRecurringDelivery,
    allergies,
    setAllergies,
    frequency,
    setFrequency,
    deliveryAddress,
    setDeliveryAddress,
    duration,
    setDuration,
    enterpriseName,
    setEnterpriseName,
    enterpriseSector,
    setEnterpriseSector,
    incorporationNumber,
    setIncorporationNumber,
    IncorporationDate,
    setIncorporationDate,
    contactNumber,
    setContactNumber,
    inspectionDate,
    setInspectionDate,
    contactPerson,
    setContactPerson,
    contactPersonJob,
    setContactPersonJob,
    purposeofPurchase,
    setPurposeofPurchase,
}) {

    
    return (
        <div>
            <h3 className=" text-3xl mt-20 mb-16">Applicant Informations</h3>
            <form
              action=""
              className="flex flex-col gap-8 w-[65%]"
              onSubmit={handleSubmit}
            >
              {/* Select applicant type */}
              <div className="flex flex-col gap-4 w-2/5">
                <label htmlFor="applicant type" className="text-xl">
                  Applicant type*
                </label>
                <select
                  onChange={(e) => setApplicantType(e.target.value)}
                  name="applicant type"
                  required
                  type="text"
                  className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                >
                  <option value="Individual">Individual</option>
                  <option value="Corporate Organization">
                    Corporate Organization
                  </option>
                </select>
              </div>

              {/* Display this UI if applicant type is Individual */}
              {applicantType === "Individual" && (
                <>
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <label htmlFor="applicant name" className="text-xl">
                        Applicant Name*
                      </label>
                      <input
                        name="applicant name"
                        type="text"
                        required
                        placeholder="First Name"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <input
                        name="applicant type"
                        type="text"
                        required
                        placeholder="Last Name"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 w-2/5">
                    <label htmlFor="applicant gender" className="text-xl">
                      Applicant gender
                    </label>
                    <select
                      name="applicant gender"
                      type="text"
                      className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-4 w-2/5">
                    <label htmlFor="applicant NIN" className="text-xl">
                      Applicant NIN
                    </label>
                    <input
                      name="applicant NIN"
                      type="text"
                      className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                      value={NIN}
                      onChange={(e) => setNIN(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-4 w-2/5">
                    <label htmlFor="applicant Birth Date" className="text-xl">
                      Applicant Birth Date
                    </label>
                    <input
                      name="applicant Birth Date"
                      type="date"
                      className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none uppercase"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <label
                        htmlFor="Prescribing health facility"
                        className="text-xl"
                      >
                        Prescribing health facility
                      </label>
                      <input
                        name="Prescribing health facility"
                        type="text"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                        value={healthFacility}
                        onChange={(e) => setHealthFacility(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <label htmlFor="Recurring delivery" className="text-xl">
                        Recurring delivery frequency
                      </label>
                      <select
                        name="Recurring delivery frequency"
                        type="text"
                        className=" border-2 border-[#62909F] rounded-md p-2 focus:outline-none"
                        value={recurringDelivery}
                        onChange={(e) => setRecurringDelivery(e.target.value)}
                      >
                        {/* Can't find options for recurring delivery in the design!!!!!!!!  Check back later */}
                        <option value='One-Time'>One-Time</option>
                        <option value='Daily'>Daily</option>
                        <option value='Weekly'>Weekly</option>
                        <option value='Bi-weekly'>Bi-weekly</option>
                        <option value='Monthly'>Monthly</option>
                        <option value='Quarterly'>Quarterly</option>
                        <option value='Semi annually'>Semi annually</option>
                        <option value='Annually'>Annually</option>
                     
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <label htmlFor="Allergies" className="text-xl">
                        Allergies
                      </label>
                      <input
                        name="Allergies"
                        type="text"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                        value={allergies}
                        onChange={(e) => setAllergies(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <label htmlFor="Recurring delivery Start date" className="text-xl">
                        Recurring delivery start date
                      </label>
                      <input
                        name="Recurring delivery Start date"
                        type="date"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <label htmlFor="Delivery address" className="text-xl">
                        Delivery address
                      </label>
                      <input
                        name="Delivery address"
                        type="text"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <label htmlFor="Duration" className="text-xl">
                        Recurring delivery end date
                      </label>
                      <input
                        name="Duration"
                        type="date"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <label htmlFor="Contact phone number" className="text-xl">
                        Contact phone number
                      </label>
                      <input
                        name="Contact phone number"
                        type="text"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <label
                        htmlFor="Note"
                        className="text-xl"
                      >
                        Note
                      </label>
                      <textarea
                        name="Note"
                        rows={5}
                        cols={3}
                        className=" border-2 border-[#62909F] rounded-md p-2 focus:outline-none uppercase"
                        value={inspectionDate}
                        onChange={(e) => setInspectionDate(e.target.value)}
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Display this UI if applicant type is Corporate Organization */}
              {applicantType === "Corporate Organization" && (
                <>
                  <div className="flex flex-col gap-4 w-2/5">
                    <label htmlFor="Enterprise Name" className="text-xl">
                      Enterprise Name*
                    </label>
                    <input
                      name="Enterprise name"
                      type="text"
                      required
                      placeholder="Enterprise Name"
                      className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                      value={enterpriseName}
                      onChange={(e) => setEnterpriseName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-4 w-2/5">
                    <label htmlFor="Enterprise sector" className="text-xl">
                      Enterprise sector*
                    </label>
                    <select
                      name="Enterprise sector"
                      type="text"
                      className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                      value={enterpriseSector}
                      onChange={(e) => setEnterpriseSector(e.target.value)}
                    >
                      {/* Can't find options for enterprise sector in the design!!!!!!! check back later */}
                      <option value="Financial Services">Financial Services</option>
                      <option value="Tourism and Hospitality">Tourism and Hospitality</option>
                      <option value="Construction and Mininig">Construction and Mininig</option>
                      <option value="Industrial and Manufacturing ">Industrial and Manufacturing </option>
                      <option value="Health, Medical and Pharmaceutical ">Health, Medical and Pharmaceutical </option>
                      <option value="Technology, Media and Telecommunication ">Technology, Media and Telecommunication </option>
                      <option value="Education and Training ">Education and Training </option>
                      <option value="Distribution and Physical stores ">Distribution and Physical stores </option>
                      <option value="Agriculture ">Agriculture </option>
                      <option value="Automotive services ">Automotive services </option>
                      <option value="Governmental Organization ">Governmental Organization </option>
                      <option value="NGOs and Civic Society Organization ">NGOs and Civic Society Organization </option>
                      <option value="Aviation ">Aviation </option>
                      <option value="Consulting and Professional Services">Consulting and Professional Services </option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-4 w-2/5">
                    <label
                      htmlFor="Applicant incorporation number"
                      className="text-xl"
                    >
                      Applicant incorporation number*
                    </label>
                    <input
                      name="Applicant incorporation number"
                      type="text"
                      className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                      value={incorporationNumber}
                      onChange={(e) => setIncorporationNumber(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-4 w-2/5">
                    <label
                      htmlFor="applicant incorporation date"
                      className="text-xl"
                    >
                      Applicant incorporation date*
                    </label>
                    <input
                      name="applicant incorporation date"
                      type="date"
                      className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                      value={IncorporationDate}
                      onChange={(e) => setIncorporationDate(e.target.value)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <label htmlFor="Contact person" className="text-xl">
                        Contact person*
                      </label>
                      <input
                        name="Contact person"
                        type="text"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                        value={contactPerson}
                        onChange={(e) => setContactPerson(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <label
                        htmlFor="Contact person job title"
                        className="text-xl"
                      >
                        Contact person job title*
                      </label>
                      <input
                        name="Contact person job title"
                        type="text"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                        value={contactPersonJob}
                        onChange={(e) => setContactPersonJob(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 w-2/5">
                    <label
                      htmlFor="Purpose of purchase to applicant"
                      className="text-xl"
                    >
                      Purpose of purchase to applicant*
                    </label>
                    <input
                      name="Purpose of purchase to applicant"
                      type="text"
                      className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                      value={purposeofPurchase}
                      onChange={(e) => setPurposeofPurchase(e.target.value)}
                    />
                  </div>
                </>
              )}
              <div className="text-right">
                <input
                  type="submit"
                  value="Review"
                  className="text-xl p-3 bg-formBlue text-white rounded-md w-[150px] hover:text-formBlue hover:bg-transparent border-2 border-formBlue"
                />
              </div>
            </form>
          </div>
    )
}

export default ApplicantInfoForm
