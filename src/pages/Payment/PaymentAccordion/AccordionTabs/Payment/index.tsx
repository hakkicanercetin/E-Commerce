import { useState } from "react";
import Credit from "./CreditCard";

const paymentOptions = [
  {
    id: "credit_card",
    header: <p className="text-lg font-semibold">Kredi Kartı</p>,
    content: <Credit />,
  },
  {
    id: "cash_on_delivery_card",
    header: (
      <>
        <p className="text-lg font-semibold">Kapıda Ödeme (Kredi Kartı)</p>
        <p className="text-lg font-bold">39 TL İşlem Bedeli</p>
      </>
    ),
    content: (
      <div>
        <p>Kargo şirketi tarafından kapıda ödeme hizmet bedeli alınmaktadır.</p>
      </div>
    ),
  },
  {
    id: "cash_on_delivery_cash",
    header: (
      <>
        <p className="text-lg font-semibold">Kapıda Ödeme (Nakit)</p>
        <p className="text-lg font-bold">39 TL İşlem Bedeli</p>
      </>
    ),
    content: (
      <div>
        <p>Kargo şirketi tarafından kapıda ödeme hizmet bedeli alınmaktadır.</p>
      </div>
    ),
  },
];
const AccordionPayment = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleLabelClick = (optionId: string) => {
    setSelectedOption(optionId);
    console.log("Seçilen seçenek:", selectedOption);
  };
  return (
    <>
      {paymentOptions.map((opt, index) => (
        <div key={index} className="py-4">
          <label
            onClick={() => handleLabelClick(opt.id)}
            className="border-2 border-[#2126AB] rounded-lg p-4 flex items-center justify-between cursor-pointer transition-all duration-200 hover:shadow-md"
          >
            <div className="flex">
              <input name="plan" type="radio" className="hidden peer" />
              <div className="w-6 h-6 rounded-full border-2 border-[#2126AB] flex items-center justify-center mr-4 mt-1 bg-white peer-checked:bg-black peer-checked:border-black relative">
                <div className="w-2 h-[14px] mb-[3px] ml-[1px] bg-transparent rotate-45 border-b-[1px] border-r-[1px] border-white peer-checked:block absolute"></div>
              </div>
              <div>
                <div className="text-lg font-semibold">
                  <div className="flex justify-between">{opt.header}</div>
                </div>
                {selectedOption === opt.id && (
                  <div className="text-sm text-gray-500 py-4">
                    {opt.content}
                  </div>
                )}
              </div>
            </div>
          </label>
        </div>
      ))}
    </>
  );
};

export default AccordionPayment;
