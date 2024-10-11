import { useState } from "react";
import AccordionAddress from "./AccordionTabs/Address";
import AccordionCargo from "./AccordionTabs/Cargo";
import AccordionPayment from "./AccordionTabs/Payment";
const PaymentAccordion = () => {
  const [tabs, setTabs] = useState([
  {
    name: "Address",
    TR: "Adres",
    content: [
      {
        header: "Ev",
        address: "Ahmet Mah. Mehmetoğlu Sk., No: 1 Daire: 2, Ataşehir, İstanbul, Türkiye",
      },
      {
        header: "Ofis",
        address: "Ayşe Mah. Fatmaoğlu Cad., No: 4 D: 4, Ataşehir, İstanbul, Türkiye",
      },
    ],
  },
  {
    name: "Cargo",
    TR: "Kargo",
  },
  {
    name: "Payment",
    TR: "Ödeme",
  },
]);
  const [activeTab, setActiveTab] = useState<number[]>([0]);
  const handleTabClick = (index: number) => {
    if (!activeTab.includes(index) && (index < activeTab[0])) {
      setActiveTab([index]);
    }
}
const handleNextTab = () => {
    const nextTab = activeTab[0] + 1;
    if (nextTab < tabs.length) {
        setActiveTab([nextTab]);
    }
};
  return (
    <>
      <div className="flex flex-col">
        {tabs.map((tab, index) => (
          <div key={index}>
            <div className="flex items-center justify-between py-4 bg-white cursor-pointer" onClick={()=>handleTabClick(index)}>
              <div className="flex justify-center items-center">
                <div
                  className={`rounded-full w-8 h-8 flex justify-center items-center ${
                    activeTab[0] == index
                      ? "bg-black"
                      : "border-[1px] border-black"
                  }`}
                >
                  <p
                    className={`text-black text-xl ${
                      activeTab[0] == index && "text-white"
                    }`}
                  >
                    {index + 1}
                  </p>
                </div>
                <p className="pl-4">{tab.TR}</p>
              </div>
            </div>
            {activeTab.includes(index) && (
              <div className="pl-12">
                {index === 0 && (
                  <AccordionAddress
                    handleNextTab={handleNextTab}
                    tabs={tabs}
                  ></AccordionAddress>
                )}
                {index === 1 && (
                  <AccordionCargo
                    handleNextTab={handleNextTab}
                  ></AccordionCargo>
                )}
                {index === 2 && <AccordionPayment></AccordionPayment>}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default PaymentAccordion;
