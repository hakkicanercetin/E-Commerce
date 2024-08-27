import { useState } from "react";
import TR from "../../../../assets/turkey.webp";
import USA from "../../../../assets/usa.svg";
import { FaArrowDown } from "react-icons/fa";
interface CountryType{
    name:string,
    phoneCode:string,
    flag:string
}
const PhoneInput = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeCountry, setActiveCountry] = useState({
    name:"Turkey",
    phoneCode:"+90",
    flag:TR
  });
  const country = [
    {
        name:"USA",
        phoneCode:"+1",
        flag:USA
    },
    {
        name:"Turkey",
        phoneCode:"+90",
        flag:TR
    }
  ]
  const selectCountry = (country:CountryType) => {
    setActiveCountry(country)
    setDropdownOpen(false)
  }
  return (
    <>

      <div>
      <label htmlFor="tel">*Telefon</label>
      
      <div className="flex flex-row">
      <div className="flex items-center relative">

        <button
          id="dropdown-phone-button"
          onClick={()=>setDropdownOpen((prev)=>!prev)}
          className="inline-flex items-center text-center border-t-[1px] border-l-[1px] border-b-[1px] border-solid border-[#e5e5e5] bg-[#f7f7f7] p-4 rounded-l-lg"
          type="button"
        >
          {
            <div className="flex items-center">
                <img src={activeCountry.flag} alt="country" className="h-4 w-6 me-2"></img>
                <p>{activeCountry.phoneCode}</p>
            </div>
          }
          
          <FaArrowDown className="w-2.5 h-2.5 ml-6 md:ml-5 2xl:ml-4" />
        </button>
        <div
          className={`absolute top-full left-0 z-10 mt-2 w-52 bg-white text-black ${
            dropdownOpen ? "block" : "hidden"
          }`}
        >
          <ul className="py-2 border-[1px] border-solid border-[#000]" aria-labelledby="dropdown-phone-button">
            {
                country.map((c,index)=>(
                    <li key={index}>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 text-sm text-black hover:bg-gray-500  hover:text-white"
                role="menuitem"
                onClick={()=>selectCountry(c)}
              >
                <span className="inline-flex items-center">
                  <img src={c.flag} className="h-4 w-6 me-2" alt="country" />
                  {c.name}
                </span>
              </button>
            </li>
                ))
            }
          </ul>
        </div>
      </div>
        <div className="w-full">
        <input
          type="text"
          id="tel"
          className="border-t-[1px] border-r-[1px] border-b-[1px] border-solid border-[#e5e5e5] bg-[#f7f7f7] p-4 w-full rounded-r-lg"
        />
        </div>
      </div>
      </div>
    </>
  );
};

export default PhoneInput;
