import { useState } from "react";
import classes from "./index.module.css"
interface AromaTypes{
    name:string,
    color:string,
    id:number
}
const AromaButton = ({name,color,id}:AromaTypes) => {
    const [activeButton,setActiveButton] = useState<number|null>(1)
    const handleClick=(buttonId:number) => {
      if (activeButton === buttonId) {
        setActiveButton(null);
    } else {
        setActiveButton(buttonId);
    }
    };
  return (
    <>
      <div className="inline-flex flex-col">
      <button className={`flex justify-center items-center bg-[#F6F7F8] border-[3px] border-solid ${activeButton === id ? classes.active : classes.inactive}`}  onClick={()=>handleClick(id)}>
        <div className="flex justify-center items-center px-[23px] ">
          <p className="text-xs leading-[22px] font-medium">{name}</p>
        </div>
        <div className={`w-[20px]  h-[29px]`} style={{backgroundColor:`${color}`}}></div>
      </button>
      </div>
    </>
  );
};

export default AromaButton;
