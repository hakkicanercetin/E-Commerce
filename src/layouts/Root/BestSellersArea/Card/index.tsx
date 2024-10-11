import { BaseProduct } from "../../../../Types/APIAllProducts";
import Stars from "../../../common/Stars";

const Card = ({ productData }: { productData: BaseProduct }) => {
  return (
    <>
      <div className="text-center flex flex-col justify-between cursor-pointer">
        {productData.price_info.discount_percentage && (
          <div className="flex justify-end">
            <div className="absolute z-10">
              <div className="relative right-0 bg-[#ed2727] text-white text-center p-1 xl:p-2">
                <p className="text-base xl:text-xl leading-5">
                  %{productData.price_info.discount_percentage}
                </p>
                <p className="text-[9px] xl:text-[11px] leading-3">İNDİRİM</p>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center">
          <div className="w-full aspect-square">
            <img
              src={`https://fe1111.projects.academy.onlyjs.com/${productData.photo_src}`}
              className="w-full object-cover h-full"
              alt="product"
            />
          </div>
        </div>
        <p className="text-base leading-[18px] text-center py-2">
          {productData.name}
        </p>
        <div className="flex justify-center items-center h-12">
          <p className="text-[11px] leading-4 text-[#888888] px-5">
            {productData.short_explanation}
          </p>
        </div>
        <Stars count={5}></Stars>
        <div>
          <p className="mt-5">{productData.comment_count} Yorum</p>
          <div className="flex justify-center">
            {productData.price_info.discount_percentage ? (
              <>
                <p className="mt-1 text-xl">
                  {productData.price_info.discounted_price &&
                    Math.floor(productData.price_info.discounted_price)}{" "}
                  TL
                </p>
                <p className="mb-[1px] ml-1 text-[#ed2727] text-base line-through self-end">
                  {productData.price_info.total_price} TL
                </p>
              </>
            ) : (
              <p className="mt-1 text-xl">
                {productData.price_info.total_price} TL
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
