import { useDatas } from "../../../Context";
import { Link } from "react-router-dom";
import { OrderType } from "../../../Types";

const Sipariş = () => {
  const { orders } = useDatas();

  return (
    <div className="col-span-3 pb-10">
      <div className="py-6">
        <p className="text-base font-semibold leading-7">Siparişlerim</p>
      </div>
      {orders.map((s:OrderType, index:number) => (
        <div
          key={index}
          className={`grid grid-cols-12 py-8 border-solid border-[#000] ${
            index === orders.length - 1 ? "border-0" : "border-b-[1px]"
          }`}
        >
          <div className="col-span-1">
            <img src={s.image} alt="product" className="w-12 h-12" />
          </div>
          <div className="col-span-6 text-sm leading-6">
            <p className="text-[#52c41a]">{s.status}</p>
            <p className="font-semibold">{s.name}</p>
            <p>{s.date} Tarihinde Sipariş Verildi</p>
            <p>{s.number} numaralı sipariş</p>
          </div>
          <div className="col-span-5 flex items-center justify-center">
            <button className="text-sm px-4 py-2 border-[1px] border-solid border-[#000] rounded">
              <Link to={`/hesabim/${s.number}`}>Detayları Görüntüle</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sipariş;
