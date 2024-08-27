import { useState } from "react";
import { FaRegCreditCard } from "react-icons/fa";
import SSSAccordion from "./Accordion";
import Inputs from "../Contact/Inputs";

type Question = {
  question: string;
  answer: string;
};

type Sorular = {
  [key in "Genel" | "Ürünler" | "Kargo"]: Question[];
};

const SSS = () => {
  const [activeButton, setActiveButton] = useState<"Genel" | "Ürünler" | "Kargo">("Genel");
  
  const handleClick = (tab: "Genel" | "Ürünler" | "Kargo") => {
    setActiveButton(tab);
  };

  const tabs: ("Genel" | "Ürünler" | "Kargo")[] = ["Genel", "Ürünler", "Kargo"];
  const sorular: Sorular = {
    "Genel": [
      {
        question: "OJS Nutrition ürünlerinin menşei neresi?",
        answer: "Lorem ipsum",
      },
      {
        question: "Hangi sertifikalarınız var?",
        answer: "Lorem ipsum",
      },
    ],
    "Ürünler": [
      {
        question: "aOJS Nutrition ürünlerinin menşei neresi?",
        answer: "Lorem ipsum",
      },
      {
        question: "Hangi sertifikalarınız var?",
        answer: "Lorem ipsum",
      },
    ],
    "Kargo": [
      {
        question: "bOJS Nutrition ürünlerinin menşei neresi?",
        answer: "Lorem ipsum",
      },
      {
        question: "Hangi sertifikalarınız var?",
        answer: "Lorem ipsum",
      },
    ],
  };

  return (
    <>
      <div className="min-[1700px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[32px] max-[767px]:px-4">
        <div className="py-4">
        <div className="py-3">
          <div className="flex gap-4">
            {tabs.map((t, index) => (
              <button
                key={index}
                className={`p-3 ${activeButton === t ? "bg-black text-white" : "bg-[#e5e5e5]"}`}
                onClick={() => handleClick(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="flex py-3 items-center gap-2">
          <FaRegCreditCard size={24} color="blue" />
          <p className="text-base font-semibold leading-[60px]">{activeButton}</p>
        </div>
        <SSSAccordion sorular={sorular[activeButton]} />
        </div>
        <div className=" text-center py-5 2xl:px-[250px]">
        <Inputs></Inputs>
        </div>
      </div>
    </>
  );
};

export default SSS;
