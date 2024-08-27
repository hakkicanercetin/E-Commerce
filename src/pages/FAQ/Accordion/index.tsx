import { useState } from "react";
import { FaRegMinusSquare, FaRegPlusSquare } from "react-icons/fa";
interface SSSAccordionProps {
  sorular: {
    question: string;
    answer: string;
  }[];
}
const SSSAccordion = ({ sorular }: SSSAccordionProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };
  return (
    <>
      <div className="bg-[#e5e5e5] p-3 flex flex-col gap-y-3">
        {sorular.map((g, index) => (
          <>
            <div
              key={index}
              className="flex items-center justify-between py-4 px-3 bg-white cursor-pointer"
              onClick={()=>handleToggle(index)}
            >
              <p>{g.question}</p>
              {openIndexes.includes(index) ? <FaRegMinusSquare /> : <FaRegPlusSquare />}
            </div>
            {openIndexes.includes(index) && (
              <div className="py-4 px-3">
                <p>{g.answer}</p>
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default SSSAccordion;
