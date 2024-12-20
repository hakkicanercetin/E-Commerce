import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { useBasketStore } from "../../../../../stores/Basket/useBasketStore";
import BasketOrder from "./BasketOrder";

const Basket = ({
  isCartOpen,
  setIsCartOpen,
}: {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { totalPrice, calculateTotalPrice,basket } = useBasketStore();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen]);

  useEffect(() => {
    calculateTotalPrice();
  }, [basket]);

  return (
    <>
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 md:w-[500px] h-full bg-white shadow-lg z-50 ease-in-out duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4">
            <p className="flex-1 text-xl font-bold text-center">Sepetim</p>
            <button onClick={() => setIsCartOpen(false)} className="text-xl">
              <IoIosClose size={32} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto bg-[#f7f7f7]">
            <BasketOrder />
          </div>
          <div className="p-4 bg-white border-t-2 border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-semibold">Toplam:</p>
              <p className="text-xl font-bold">{Math.floor(totalPrice)} TL</p>
            </div>
            <Link to={"/payment"}>
            <button
              onClick={() => setIsCartOpen(false)}
              className="bg-black text-white py-2 rounded w-full"
            >
              DEVAM ET
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
