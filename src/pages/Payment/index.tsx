import { useEffect } from "react";
import logo from "../../assets/logo.png";
import { useBasketStore } from "../../stores/Basket/useBasketStore";
import PaymentAccordion from "./PaymentAccordion";
import { Link } from "react-router-dom";
const Payment = () => {
  const {
    basket: basketItems,
    totalPrice,
    calculateTotalPrice,
  } = useBasketStore();
  useEffect(() => {
    calculateTotalPrice();
  }, [basketItems]);
  return (
    <div className="min-[1700px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[32px] max-[767px]:px-4">
      <div className="grid md:grid-cols-2 mt-7">
        <div className="col-span-1">
          <div className="flex justify-between items-center">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
            <div className="flex flex-col items-end">
              <p className="text-xl text-[#272727] font-semibold">
                İsim Soyisim
              </p>
              <p className="text-[#8A8B94] text-sm font-medium">
                isimsoyisim@mail.com
              </p>
            </div>
          </div>
          <PaymentAccordion></PaymentAccordion>
        </div>
        <div className="col-span-1">
          <div className="pl-16">
            {basketItems.map((basketItem, index) => (
              <div key={index} className="flex mb-4">
                <img
                  src={`https://fe1111.projects.academy.onlyjs.com/${basketItem.variant.photo_src}`}
                  alt=""
                  className="w-24 h-24 object-contain"
                />
                <div className="text-xs text-white bg-[#2126AB] rounded-full w-[18px] h-[18px] relative -left-3 -top-1">
                  <p className="text-center text-sm font-bold">
                    {basketItem.quantity}
                  </p>
                </div>
                <div className="ml-4 flex-1 flex flex-col mt-3">
                  <div className="flex justify-between">
                    <p>{basketItem.name}</p>
                    <p>{basketItem.price} TL</p>
                  </div>
                  <p className="text-xs text-slate-500">
                    {basketItem.variant.aroma} / {basketItem.variant.size.gram}
                    gram
                  </p>
                </div>
              </div>
            ))}
            <div>
              <div className="border-y-[1px] border-[#e5e4e9] py-6 flex justify-between">
                <p className="text-[#8A8B94]">Ara Toplam</p>
                <p>{totalPrice} TL</p>
              </div>
              <div className="text-xl font-semibold flex justify-between py-6">
                <p>Toplam</p>
                <p>{totalPrice} TL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
