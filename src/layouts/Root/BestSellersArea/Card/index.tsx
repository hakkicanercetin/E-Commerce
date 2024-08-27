import Stars from "../../../common/Stars";

interface CardProps {
  image: string;
  name: string;
  subtitle: string;
  commentNumber: string;
  price: string;
  discount?: string;
  oldprice?: string;
}

const Card = ({
  image,
  name,
  subtitle,
  commentNumber,
  price,
  discount,
  oldprice,
}: CardProps) => {
  return (
    <>
      <div className="text-center flex flex-col justify-between">
        {discount && (
          <div className="flex justify-end">
            <div className="absolute">
              <div className="relative right-0 bg-[#ed2727] text-white text-center p-1 xl:p-2">
                <p className="text-base xl:text-xl leading-5">%{discount}</p>
                <p className="text-[9px] xl:text-[11px] leading-3">İNDİRİM</p>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center">
          <img src={image} className="w-full" alt="product" />
        </div>
        <p className="text-base leading-[18px] text-center">{name}</p>
        <div>
        <p className="text-[11px] leading-4 text-[#888888] px-5">{subtitle}</p>
        </div>
        <Stars></Stars>
        <div>
          <p className="mt-5">{commentNumber} Yorum</p>
          <div className="flex justify-center">
            <p className="mt-1 text-xl">{price} TL</p>
            {discount && (
              <p className="mb-[1px] ml-1 text-[#ed2727] text-base line-through self-end">
                {oldprice} TL
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
