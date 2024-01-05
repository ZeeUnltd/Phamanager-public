const Testimonies = () => {
  return (
    <div className="px-48 py-12 bg-[#E6F2FB]">
      <div className="flex justify-center items-center mb-14">
        <h3 className="font-semibold text-2xl ">Our Customers Testimonies</h3>
      </div>
      <div className="flex items-start gap-6">
        <div className="flex flex-col items-center gap-6 bg-white p-6">
          <div className="text-[24px]">⭐⭐⭐⭐⭐</div>
          <h3 className="font-semibold text-xl ">Less Paperwork</h3>
          <p className="text-center text-xl">
            Previously, we had paper work for everything. Now, we have none and
            twice the inbounds. Our use of the Pharmanager software has proved
            to be a great decision.
          </p>
          <h6 className="font-semibold">RX Pharmacy - Oshodi</h6>
        </div>
        <div className="flex flex-col items-center gap-6 bg-white p-6">
          <div className="text-[24px]">⭐⭐⭐⭐⭐</div>
          <h3 className="font-semibold text-xl ">Would Recommend</h3>
          <p className=" text-center text-xl">
            I can see several pharmacies that have the any medication or supply
            that I am looking for from anywhere.
          </p>
          <h6 className="font-semibold">Mahmoud</h6>
        </div>
        <div className="flex flex-col items-center gap-6 bg-white p-6">
          <div className="text-[24px]">⭐⭐⭐⭐⭐</div>
          <h3 className="font-semibold text-xl ">Would Recommend</h3>
          <p className="text-center text-xl">
            Procurement management and business planning has always been a
            worry. Pharmanager has helped with that worry with a comprehensive
            software solution.
          </p>
          <h6 className="font-semibold">MedCare - Lekki</h6>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
