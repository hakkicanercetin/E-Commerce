import Stars from "../../layouts/common/Stars";
import product from "../../assets/product.png";
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
const ProductDetail = () => {
  const Aromalar = [
    {
      id:1,
      name:"Bisküvi",
      color:"#E6BC79"
    },
    {
      id:2,
      name:"Çikolata",
      color:"#56321D"
    },
    {
      id:3,
      name:"Muz",
      color:"#F1D018"
    },
    {
      id:4,
      name:"Salted Caramel",
      color:"#B64300"
    },
    {
      id:5,
      name:"Choco Nut",
      color:"#7B3F00"
    },
    {
      id:6,
      name:"Hindistan Cevizi",
      color:"#BA9051"
    },
    {
      id:7,
      name:"Raspberry Cheesecake",
      color:"#CC1E5F"
    },
    {
      id:8,
      name:"Çilek",
      color:"#D61F33"
    },
  ]
  const [value,setValue]=useState(1)
  const productFeatures=[
    {
      title:"Özellikler",
      content:"Lorem İpsum"
    },
    {
      title:"Besin İçeriği",
      content:"Lorem İpsum"
    },
    {
      title:"Kullanım Şekli",
      content:"Lorem İpsum"
    }
]
  return (
    <>
      <div className="min-[1500px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[32px] max-[767px]:px-4">
        <div className="md:ml-[50px] mt-5">
          <div className="grid md:grid-cols-2">
            <div>
              <img src={product} alt="product" />
            </div>
            <div className="md:ml-[72px]">
              <p className="text-[27px] leading-9 font-semibold">
                WHEY PROTEİN
              </p>
              <p className="text-[15px] leading-[25px] font-medium text-[#636363]">
                EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ
              </p>
              <div className="flex">
                <Stars count={5}></Stars>
                <p className="text-[15px] leading-5 font-semibold self-center ml-1">
                  10869 Yorum
                </p>
              </div>
              <div className="flex py-[15px]">
                <div className="bg-[#f1f1f1] rounded-3xl px-3 py-[10px]">
                  <p className="text-[10px] leading-4 font-normal">
                    VEJETARYEN
                  </p>
                </div>
                <div className="bg-[#f1f1f1] rounded-3xl px-3 py-[10px] ml-2">
                  <p className="text-[10px] leading-4 font-normal">GLUTENSİZ</p>
                </div>
              </div>
              <hr />
              <div>
                <p className=" text-base leading-4 font-bold py-4">AROMA:</p>
                <div className="">
                  {Aromalar.map((a,index)=>(
                  <AromaButton key={index} id={a.id} name={a.name} color={a.color}></AromaButton>
                  ))}
                </div>
              </div>
              <div>
                <p className=" text-base leading-4 font-bold py-4">BOYUT:</p>
                <div className="">
                    <SizeButton text={"400G"} subtext={"16 servis"}></SizeButton>
                    <SizeButton text={"1.6KG"} subtext={"64 servis"}></SizeButton>
                    <SizeButton text={"1.6KG X 2 ADET"} subtext={"128 servis"} discount={2}></SizeButton>
                </div>
              </div>
            </div>
          </div>
          <div className="grid 2xl:grid-cols-2">
          <div className="col-span-1"></div>
          <div  className="col-span-1">
          <div className="order-2 2xl:order-1">
          <div className="flex mt-10 justify-between items-center">
                <div>
                  <p className="text-[35px] font-bold leading-10">549 TL</p>
                </div>
                <div>
                  <p className="text-[#333333] text-base leading-7 font-semibold">
                    34.31 TL /Servis
                  </p>
                </div>
              </div>
              <div className="flex justify-between pt-3 pb-5">
                <div className="flex text-center border-[1px] border-solid border-[#dddddd] rounded">
                  <button className="bg-[#f7f7f7] px-[10px] py-[14px] text-2xl leading-8 font-semibold" onClick={()=>setValue((prev)=> prev-1)}>
                    -
                  </button>
                  <input
                    className="w-[60px] text-center text-black border-x-[1px] border-x-solid border-x-[#dddddd]"
                    type="text"
                    value={value}
                    readOnly
                  />
                  <button className="bg-[#f7f7f7] px-[10px] py-[14px] text-2xl leading-8 font-semibold" onClick={()=>setValue((prev)=>prev+1)}>
                    +
                  </button>
                </div>
                <button className="bg-black text-white ml-4 w-full flex justify-center items-center rounded-sm">
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
                <p className="ml-2 text-xs leading-5 font-normal">Aynı Gün Ücretsiz Kargo</p>
              </div>
              <div className="flex justify-center items-center">
                <img src={safe} alt="cargo" />
                <p className="ml-2 text-xs leading-5 font-normal">750.000+ Mutlu Müşteri</p>
              </div>
              <div className="flex justify-center items-center">
                <img src={loop} alt="cargo" />
                <p className="ml-2 text-xs leading-5 font-normal">Memnuniyet Garantisi</p>
              </div>
            </div>
            <div className="py-[11px]">
            <hr/>
            </div>
          </div>
            <div className="order-1 2xl:order-2">
            <div className="col-span-1">
            <div className="pb-3">
              <p className="text-[10px] leading-4 font-medium">Son Kullanma Tarihi: 07.2025</p>
            </div>
            <div>
            {productFeatures.map((pf,index)=>(
            <Accordion key={index} title={pf.title} content={pf.content}></Accordion>
            ))}
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
