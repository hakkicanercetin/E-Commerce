import { useBasketStore } from "../../../../../../stores/Basket/useBasketStore";

const BasketOrder = () => {
  const { basket, increaseQuantity, decreaseQuantity } = useBasketStore();

  return (
    <>
      {basket.map((bItem, index) => (
        <div
          key={index}
          className="grid grid-cols-12 px-5 py-2 border-b-[1px] border-b-[#DDDDDD]"
        >
          <div className="col-span-3 flex justify-center items-center">
            <img
              src={`https://fe1111.projects.academy.onlyjs.com/${bItem.variant.photo_src}`}
              alt=""
            />
          </div>
          <div className="col-span-9 px-4">
            <div className="flex justify-between items-center font-semibold">
              <p>{bItem.name}</p>
              <p className="text-sm">{Math.floor(bItem.price * bItem.quantity)} TL</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-[#919191] font-bold">
                {bItem.variant.aroma && <p>{bItem.variant.aroma}</p>}
                {bItem.variant.size.gram && <p>{bItem.variant.size.gram}g</p>}
              </div>
              <div>
                <div className="flex text-center border-[1px] border-solid border-[#dddddd] rounded">
                  <button
                    className="bg-[#f7f7f7] px-[10px] py-[14px] text-2xl leading-8 font-semibold"
                    onClick={() => decreaseQuantity(bItem.variant.id)}
                  >
                    -
                  </button>
                  <input
                    className="w-[60px] text-center text-black border-x-[1px] border-x-solid border-x-[#dddddd]"
                    type="text"
                    value={bItem.quantity}
                    readOnly
                  />
                  <button
                    className="bg-[#f7f7f7] px-[10px] py-[14px] text-2xl leading-8 font-semibold"
                    onClick={() => increaseQuantity(bItem.variant.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BasketOrder;
