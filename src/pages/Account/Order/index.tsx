import { Link } from "react-router-dom";
import { dummyOrders } from "./DummyOrderData";
const Order = () => {


  return (
    <div className="col-span-3 pb-10">
      <div className="py-6">
        <p className="text-base font-semibold leading-7">Siparişlerim</p>
      </div>
      {dummyOrders.map((order, index:number) => (
        <div
          key={index}
          className={`grid grid-cols-12 py-8 border-solid border-[#000] ${
            index === dummyOrders.length - 1 ? "border-0" : "border-b-[1px]"
          }`}
        >
          <div className="col-span-1">
            <img src={order.image} alt="product" className="w-12 h-12" />
          </div>
          <div className="col-span-6 text-sm leading-6">
            <p className="text-[#52c41a]">{order.status}</p>
            <p className="font-semibold">{order.name}</p>
            <p>{order.date} Tarihinde Sipariş Verildi</p>
            <p>{order.number} numaralı sipariş</p>
          </div>
          <div className="col-span-5 flex items-center justify-center">
            <button className="text-sm px-4 py-2 border-[1px] border-solid border-[#000] rounded">
              <Link to={`/order/${order.number}`}>Detayları Görüntüle</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Order;
