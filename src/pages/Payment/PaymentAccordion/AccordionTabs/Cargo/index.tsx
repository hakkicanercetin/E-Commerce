const AccordionCargo = ({ handleNextTab }:{handleNextTab:()=>void}) => {
  return (
    <>
    <div className="">
      <div>
        <p>
          Ücretsiz Kargo (16:00 öncesi siparişler aynı gün kargolanır) /
          Ücretsiz
        </p>
      </div>
      <div className="py-4">
        <button
          className=" bg-black text-white py-4 w-full rounded-lg"
          onClick={handleNextTab}
        >
          Ödeme ile devam et
        </button>
      </div>
    </div>
    </>
  );
};

export default AccordionCargo;
