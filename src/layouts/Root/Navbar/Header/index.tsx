import logo from "../../../../assets/logo.png";
import account from "../../../../assets/account.svg";
import rectangle from "../../../../assets/rectangle.png";
import basketImage from "../../../../assets/basket.svg";
import mobilBasket from "../../../../assets/basket.png";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import classes from "./index.module.css";
import { useState } from "react";
import Basket from "./Basket";
import { Link } from "react-router-dom";
import MobileNavCategory from "./NavCategory";
import { useBasketStore } from "../../../../stores/Basket/useBasketStore";
const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { basket } = useBasketStore();
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <>
      <div className="min-[1700px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[32px]">
        <div className="flex flex-row justify-between items-center">
          <MobileNavCategory isOpen={isOpen}></MobileNavCategory>
          <div className="flex items-center min-[768px]:hidden">
            {isOpen ? (
              <IoIosMenu
                className="text-5xl"
                onClick={() => setIsOpen((prev) => !prev)}
              />
            ) : (
              <IoIosClose
                className="text-5xl"
                onClick={() => setIsOpen((prev) => !prev)}
              />
            )}
          </div>
          <div className="min-[768px]:w-[50%] max-[767px]:ml-[9px]">
            <Link to={"/"} className="inline-block">
              <img className="min-[768px]:py-8 py-4 align-middle" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="flex flex-row gap-2 items-center justify-between min-[768px]:w-full">
            <div className="flex items-center max-[767px]:hidden">
              <input
                placeholder="Aradığınız ürünü yazınız"
                className={classes.input}
              />
              <button className={classes.button}>ARA</button>
            </div>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center min-[1368px]:justify-evenly justify-center border-2 border-solid border-[#919191] py-[10px] px-3 min-[1368px]:w-[135px] w-[115px] rounded max-[767px]:hidden"
              >
                <img
                  src={account}
                  className="h-[22px] w-[22px] max-[1368px]:mr-[6px]"
                  alt="account"
                />
                <div className="flex items-center">
                  <p className="text-xs">HESAP</p>
                  <img
                    src={rectangle}
                    className="w-4 h-[10px] ml-[5px] mb-0.5"
                    alt="rectangle"
                  />
                </div>
              </button>
              {isDropdownOpen && (
                <div className="absolute w-48 bg-white shadow-lg rounded-lg z-10">
                  <ul className="">
                    <li>
                      <Link
                        to="/info"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Hesap Bilgilerim
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/order"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Siparişlerim
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/address"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Adreslerim
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-[#919191] flex items-center min-[1368px]:w-[190px] w-[111px] justify-center  border-2 border-solid border-[#919191] py-[10px] px-3 rounded max-[767px]:hidden"
            >
              <div className="text-xs text-white bg-[#ed2727] rounded-full w-[18px] h-[18px] relative -top-2.5 left-3">
                {basket.length}
              </div>
              <img
                src={basketImage}
                alt="basket"
                className="w-[22px] h-[22px] -ml-4"
              />
              <p className="text-white text-xs ml-2">SEPET</p>
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center justify-center py-[10px] px-3 rounded min-[768px]:hidden"
            >
              <div className="text-xs text-white bg-[#ed2727] rounded-full w-[18px] h-[18px] relative -top-3 left-8">
                {basket.length}
              </div>
              <img
                src={mobilBasket}
                alt="basket"
                className="w-[32px] h-[32px] "
              />
            </button>
          </div>
        </div>
      </div>
      <Basket isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}></Basket>
    </>
  );
};

export default Header;
