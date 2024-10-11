import Stars from "../../layouts/common/Stars";
import basket from "../../assets/basket2.svg";
import car from "../../assets/car.svg";
import safe from "../../assets/safe.svg";
import loop from "../../assets/loop.svg";
import { useState } from "react";
import Accordion from "../../layouts/components/Accordion";
import BestSellers from "../../layouts/Root/BestSellersArea";
import AromaButton from "../../layouts/components/AromaButton";
import SizeButton from "../../layouts/components/SizeButton";
import CommentScore from "./CommentScore";
import { useLoaderData } from "react-router";
import { BasketItemType } from "../../Types";
import { useProductVariants } from "../../hooks/Variant";
import { bestSellerAndProductDetailType } from "../../Types/APIProduct";
import { useBasketStore } from "../../stores/Basket/useBasketStore";
const ProductDetail = () => {
  const { addToBasket } = useBasketStore();
  const [counterValue, setCounterValue] = useState(1);
  const { productDetails } = useLoaderData() as bestSellerAndProductDetailType;
  console.log(productDetails)
  const {
    variants,
    name,
    comment_count,
    short_explanation,
    tags,
    explanation: { description, usage, features, nutritional_content },
  } = productDetails.data;
  const properties = { title: "Özellikler", content: features };
  const ingred = { title: "Besin İçeriği", content: nutritional_content };
  const usg = { title: "Kullanım Şekli", content: usage };
  const splitIndex = description.indexOf("-");
  const part1 = description.substring(0, splitIndex);
  const part2 = description.substring(splitIndex);
  const lines = part2.split("\n");
  const bulletPoints = lines.filter((line) => line.trim().startsWith("-"));
  /* const seenAromas = new Set<string>();
  const uniqueVariants = variants.filter((variant) => {
    if (seenAromas.has(variant.aroma)) {
      return false;
    } else {
      seenAromas.add(variant.aroma);
      return true;
    }
  });
  const [selectedAroma, setSelectedAroma] = useState<string>(
    uniqueVariants[0].aroma
  );
  const [selectedVariantId, setSelectedVariantId] = useState<string>(
  );
  useEffect(()=>{
    setSelectedVariantId(uniqueVariants[0].id)
  },[])
  console.log(selectedVariantId)
  const handleSizeClick = (id: string) => {
    setSelectedVariantId(id);
  };
  const handleAromaClick = (aroma: string) => {
    setSelectedAroma(aroma);

    const defaultVariant = variants.find((variant) => variant.aroma === aroma);
    setSelectedVariantId(defaultVariant?.id);
  };
  const selectedFinalVariant = variants.filter(
    (v) => v.id == selectedVariantId
    ); */
    const handleAddToBasket = () => {
      const price = selectedVariant.price.discount_percentage
        ? selectedVariant.price.discounted_price
        : selectedVariant.price.total_price;
  
      const item: BasketItemType = {
        variant: selectedVariant,
        quantity: counterValue,
        name: name,
        price: price,
      };
  
      addToBasket(item);
    };
  const {
    selectedVariant,
    productAromas,
    isSelectedAroma,
    isSelectedSize,
    selectAroma,
    selectSize,
} = useProductVariants(variants);
const matchingVariants = variants.filter(
  (variant) => variant.aroma === selectedVariant.aroma
);
  return (
    <>
      <div className="min-[1500px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[32px] max-[767px]:px-4">
        <div className="md:ml-[50px] mt-5">
          <div className="grid md:grid-cols-2">
            <div>
              <img
                src={`https://fe1111.projects.academy.onlyjs.com/${selectedVariant.photo_src}`}
                className="w-full"
                alt="product"
              />
            </div>
            <div className="md:ml-[72px]">
              <p className="text-[27px] leading-9 font-semibold">{name}</p>
              <p className="text-[15px] leading-[25px] font-medium text-[#636363]">
                {short_explanation}
              </p>
              <div className="flex">
                <Stars count={5}></Stars>
                <p className="text-[15px] leading-5 font-semibold self-center ml-1">
                  {comment_count} Yorum
                </p>
              </div>
              <div className="flex py-[15px] gap-x-2">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-[#f1f1f1] rounded-3xl px-3 py-[10px]"
                  >
                    <p className="text-[10px] leading-4 font-normal">{tag}</p>
                  </div>
                ))}
              </div>
              <hr />
              <div>
                <p className=" text-base leading-4 font-bold py-4">AROMA:</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {productAromas.map((aroma, index) => (
                    <AromaButton
                      key={index}
                      name={aroma}
                      onClick={() => selectAroma(aroma)}
                      isActive={isSelectedAroma(aroma)}
                    ></AromaButton>
                  ))}
                </div>
              </div>
              <div>
                <p className=" text-base leading-4 font-bold py-4">BOYUT:</p>
                <div className="flex flex-wrap gap-x-4 gap-y-3">
                  {matchingVariants.map((variant, index) => (
                    <SizeButton
                      key={index}
                      variant={variant}
                      isActive={isSelectedSize(variant.size)}
                      onClick={() => selectSize(variant.size)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid 2xl:grid-cols-2">
            <div className="col-span-1"></div>
            <div className="col-span-1">
              <div className="order-2 2xl:order-1">
                <div className="flex mt-10 justify-between items-center">
                  <div>
                  <p className="text-[35px] font-bold leading-10">
                      {Math.floor(
                        selectedVariant.price.discount_percentage
                          ? selectedVariant.price.discounted_price * counterValue
                          : selectedVariant.price.total_price * counterValue
                      )} TL
                    </p>
                  </div>
                  <div>
                    {selectedVariant.price.price_per_servings && (
                      <p className="text-[#333333] text-base leading-7 font-semibold">
                        {Math.floor(
                          selectedVariant.price.price_per_servings
                        )}{" "}
                        TL / Servis
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between pt-3 pb-5">
                  <div className="flex text-center border-[1px] border-solid border-[#dddddd] rounded">
                    <button
                      className={`bg-[#f7f7f7] px-[10px] py-[14px] text-2xl leading-8 font-semibold ${
                        counterValue == 1 && "opacity-30"
                      }`}
                      disabled={counterValue == 1}
                      onClick={() =>
                        setCounterValue((prev) => (prev > 1 ? prev - 1 : 1))
                      }
                    >
                      -
                    </button>
                    <input
                      className="w-[60px] text-center text-black border-x-[1px] border-x-solid border-x-[#dddddd]"
                      type="text"
                      value={counterValue}
                      readOnly
                    />
                    <button
                      className="bg-[#f7f7f7] px-[10px] py-[14px] text-2xl leading-8 font-semibold"
                      onClick={() => setCounterValue((prev) => prev + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button className="bg-black text-white ml-4 w-full flex justify-center items-center rounded-sm" onClick={handleAddToBasket}>
                    <div>
                      <img src={basket} alt="" />
                    </div>
                    <div className="ml-[10px]">
                      <p>SEPETE EKLE</p>
                    </div>
                  </button>
                </div>
                <div className="flex justify-around text-center">
                  <div className="flex justify-center items-center">
                    <img src={car} alt="cargo" />
                    <p className="ml-2 text-xs leading-5 font-normal">
                      Aynı Gün Ücretsiz Kargo
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={safe} alt="cargo" />
                    <p className="ml-2 text-xs leading-5 font-normal">
                      750.000+ Mutlu Müşteri
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={loop} alt="cargo" />
                    <p className="ml-2 text-xs leading-5 font-normal">
                      Memnuniyet Garantisi
                    </p>
                  </div>
                </div>
                <div className="py-[11px]">
                  <hr />
                </div>
              </div>
              <div className="order-1 2xl:order-2">
                <div className="col-span-1">
                  <div className="pb-3">
                    <p className="text-[10px] leading-4 font-medium">
                      Son Kullanma Tarihi: 07.2025
                    </p>
                  </div>
                  <div className="my-3">
                    <div>
                      <p>{part1}</p>
                    </div>
                    <div className="py-3">
                      <ul className=" list-disc">
                        {bulletPoints.map((point, index) => (
                          <li key={index} className="ml-4">
                            {point.replace("-", "").trim()}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Accordion
                      property={properties}
                      ingred={ingred}
                      usg={usg}
                    ></Accordion>
                  </div>
                </div>
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="inline-block py-[130px] w-full">
        <BestSellers title="SON GÖRÜNTÜLENEN ÜRÜNLER"></BestSellers>
        <CommentScore score={4.8} totalComment={10869}></CommentScore>
        <BestSellers title="ÇOK SATANLAR"></BestSellers>
      </div>
    </>
  );
};

export default ProductDetail;
