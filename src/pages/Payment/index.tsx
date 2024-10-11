import logo from "../../assets/logo.png";
import PaymentAccordion from "./PaymentAccordion";
const Payment = () => {
  return (
    <div className="min-[1700px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[32px] max-[767px]:px-4">
      <div className="grid md:grid-cols-2 mt-7">
        <div>
          <div className="flex justify-between items-center">
            <img src={logo} alt="" />
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
      </div>
    </div>
  );
};

export default Payment;
