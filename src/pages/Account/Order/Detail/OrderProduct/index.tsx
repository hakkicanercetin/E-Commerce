import melatonin from "../../../../../assets/Melatonin.png"
const OrderProduct = () => {
  return (
    <>
      <div className="flex">
        <div>
          <img src={melatonin} alt="" />
        </div>
        <div className="pl-3 pt-4">
          <p className=" font-semibold">MELATONİN x2</p>
          <p>62TL</p>
          <p>Boyut: 1 KUTU</p>
        </div>
      </div>
    </>
  );
};

export default OrderProduct;
