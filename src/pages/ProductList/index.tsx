import product from "../../assets/product.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";
import product5 from "../../assets/product5.png";
import product6 from "../../assets/product6.png";
import product7 from "../../assets/product7.png";
import product8 from "../../assets/product8.png";
import product9 from "../../assets/product9.png";
import product10 from "../../assets/product10.png";
import product11 from "../../assets/product11.png";
import product12 from "../../assets/product12.png";
import Card from "../../layouts/Root/BestSellersArea/Card";
import { useState } from "react";
const ProductList = () => {
    const [isExpanded,setIsExpanded] = useState(false)
  const ProteinProducts = [
    {
      image: product,
      name: "WHEY PROTEİN",
      subtitle: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
      commentNumber: "10869",
      price: "549",
    },
    {
      image: product2,
      name: "WHEY ISOLATE",
      subtitle: "%90 PROTEİNLİ EN SAF WHEY",
      commentNumber: "887",
      price: "749",
    },
    {
      image: product3,
      name: "FITNESS PAKETİ",
      subtitle: "EN POPÜLER ÜRÜNLER BİR ARADA",
      commentNumber: "7650",
      price: "799",
      discount: "29",
      oldPrice: "1126",
    },
    {
      image: product4,
      name: "PEA PROTEIN",
      subtitle: "EN POPÜLER VEGAN PROTEİN KAYNAĞI",
      commentNumber: "1778",
      price: "349 TL",
    },
    {
      image: product5,
      name: "MICELLAR CASEIN",
      subtitle: "YAVAŞ SİNDİRİLEN PROTEİN KAYNAĞI",
      commentNumber: "166",
      price: "599",
    },
    {
      image: product6,
      name: "EGG WHITE POWDER",
      subtitle: "PROTEİNİN ALTIN STANDARTI",
      commentNumber: "339",
      price: "899",
    },
    {
      image: product7,
      name: "MILK PROTEIN",
      subtitle: "%80 KAZEIN, %20 WHEY PROTEİNİ",
      commentNumber: "205",
      price: "699",
    },
    {
      image: product8,
      name: "SOYA PROTEIN",
      subtitle: "VEGAN PROTEİN KAYNAĞI",
      commentNumber: "214",
      price: "449",
    },
    {
      image: product9,
      name: "PROTEİN BAR 2'Lİ PAKET",
      subtitle: "%30 PROTEİN, ŞEKER İLAVESİZ",
      commentNumber: "166",
      price: "59",
      discount: "34",
      oldPrice: "90",
    },
    {
      image: product10,
      name: "MASS GAINER LANSMAN",
      subtitle: "YÜKSEK KALORİLİ PRATİK ÖĞÜN",
      commentNumber: "339",
      price: "699",
      discount: "30",
      oldPrice: "999",
    },
    {
      image: product11,
      name: "PROTEİN BAR",
      subtitle: "%30 PROTEİN, ŞEKER İLAVESİZ",
      commentNumber: "508",
      price: "249",
      discount: "29",
      oldPrice: "349",
    },
    {
      image: product12,
      name: "COLLAGEN COFFEE",
      subtitle: "KOLAJENLİ KAHVE",
      commentNumber: "377",
      price: "349",
    },
  ];
  return (
    <>
      <div className="min-[1700px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[32px] max-[767px]:px-4">
        <div className=" mt-[72px]">
          <div>
            <p className="text-[45px] font-extrabold leading-8 text-center mt-[10px]">
              PROTEİN
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 py-4 gap-5">
            {ProteinProducts.map((mp, index) => (
              <Card
                key={index}
                image={mp.image}
                name={mp.name}
                subtitle={mp.subtitle}
                commentNumber={mp.commentNumber}
                price={mp.price}
                discount={mp.discount}
                oldprice={mp.oldPrice}
              ></Card>
            ))}
          </div>
        </div>
        <div className="text-center py-20">
            <p>Bu sayfada toplam {ProteinProducts.length} ürün görüntüleniyor</p>
        </div>
        <div className="py-10">
            <p>Vücudun tüm fonksiyonlarını sağlıklı bir şekilde yerine getirmesini sağlayan temel yapı taşlarından biri proteindir. <span className="font-bold">Protein</span> kısaca, bir veya daha fazla amino asit artık <span className={isExpanded ? `inline-block`:`hidden`}>Lorem ipsum</span></p>
            <button className={`text-base font-normal text-[#059669]`} onClick={()=>setIsExpanded(prev=>!prev)}>{isExpanded ? "Daha az göster" : "Daha fazla göster"}</button>
        </div>
      </div>
    </>
  );
};

export default ProductList;
