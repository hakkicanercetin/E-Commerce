import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
interface AccordionTypes {
  title:string,
  content:string
}
const Accordion = ({title,content}:AccordionTypes) => {
const [isOpen, setIsOpen] = useState(false);
  const [rotate, setRotate] = useState(false); 
  const handleToggle = () => {
    setIsOpen(!isOpen);
    setRotate(!rotate);
  };
  return (
    <>
    <li className="list-none mb-2">
      <h3 className={`flex`}>
        <button onClick={handleToggle} className="w-full cursor-pointer flex justify-between items-center text-left py-2">
          {title}
          <div className={rotate ? '-rotate-180' : ''}>
          <IoIosArrowDown />
          </div>
        </button>
      </h3>
      </li>
      {isOpen && (
        <div className="py-5">
          <p>{content}</p>
        </div>
      )
      }
      <hr />
      </>
  )
}

export default Accordion