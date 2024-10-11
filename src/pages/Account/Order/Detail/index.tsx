import { useParams } from "react-router";
import { dummyOrders } from "../DummyOrderData";
import OrderProduct from "./OrderProduct";

const OrderDetail = () => {
  const { id } = useParams();
  const obj = dummyOrders.find((order) => order.number == id);
  if (!obj) {
    return <p>Belirtilen sipariş bulunamadı.</p>;
  }
  return (
    <>
      <div className="col-span-3 pb-10">
        <div className="py-6">
          <p className="text-base font-semibold leading-7">
            Sipariş {obj.status}
          </p>
          <p className="text-sm leading-7">
            Sipariş {obj.date} Tarihinde Sipariş Verildi. - {obj.number}{" "}
            numaralı sipariş
          </p>
        </div>
        <div className="md:grid md:grid-cols-3">
          <div className="col-span-2">
            <div className="py-5 border-y-[1px] border-y-black">
              <OrderProduct></OrderProduct>
              <OrderProduct></OrderProduct>
            </div>
            <div className="flex">
              <p>hepsiJet</p>
              <p className="px-4">Takip Numarası: &nbsp;&nbsp;&nbsp; HJ2192904051</p>
            </div>
          </div>
          <div className="col-span-1 md:pl-5 mt-20 md:mt-0">
            <div className=" border-y-[1px] border-y-black py-4">
              <p className=" font-semibold">Adres</p>
              <p>Uğur İLTER</p>
              <p>
                Barbaros, Nidakule Ataşehir Batı, Begonya Sk. No: 1/2, 34746
                Ataşehir/İstanbul
              </p>
            </div>
            <div className=" border-b-[1px] border-b-black py-4">
              <p className=" font-semibold">Ödeme</p>
              <p>Kredi Kartı - 770 TL</p>
              <p>
              **** **** **** **61
              </p>
            </div>
            <div className=" border-b-[1px] border-b-black py-4">
              <p className=" font-semibold">Özet</p>
              <div className="flex justify-between py-1">
                <p>Ara Toplam</p>
                <p>856 TL</p>
              </div>
              <div className="flex justify-between py-1">
                <p>Kargo</p>
                <p>0 TL</p>
              </div>
              <div className="flex justify-between py-1">
                <p>Toplam Vergi</p>
                <p>8 TL</p>
              </div>
              <div className="flex justify-between py-1">
                <p>Yüzde 10 indirim!</p>
                <p>-86 TL</p>
              </div>
              <div className="flex justify-between py-1">
                <p>Toplam</p>
                <p>770 TL</p>
              </div>
            </div>
            <div className="py-4">
              <p className="py-1 font-semibold">Yardıma mı ihtiyacın var?</p>
              <p className="py-1">Sıkça Sorulan Sorular</p>
              <p className="py-1">Satış Sözleşmesi</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
