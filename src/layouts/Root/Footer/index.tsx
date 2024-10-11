import { useState } from "react";
import logoWhite from "../../../assets/LOGO_Beyaz.png";
import Stars from "../../common/Stars";
interface SectionTypes{
  OJS:boolean,
  Kategoriler:boolean,
  Popüler:boolean,
}
const Footer = () => {
  const [isOpen,setIsOpen] = useState<SectionTypes>({
    OJS:false,
    Kategoriler:false,
    Popüler:false
  })
  const handleToggle = (section: keyof SectionTypes) => {
    setIsOpen(prev =>(
      {
        ...prev,
        [section]:!prev[section]
      }
    ));
  };
  const FooterOJSTexts = [
    "İletişim",
    "Hakkımızda",
    "Sıkça Sorulan Sorular",
    "KVKK",
    "Çalışma İlkelerimiz",
    "Satış Sözleşmesi",
    "Garanti ve İade Koşulları",
    "Gerçek Müşteri Yorumları",
    "Blog",
  ];
  const FooterKategorilerTexts = [
    "Protein",
    "Spor Gıdaları",
    "Sağlık",
    "Gıda",
    "Vitamin",
    "Aksesuar",
    "Tüm Ürünler",
    "Paketler",
    "Lansmana Özel",
  ];
  const FooterPopülerTexts = [
    "Whey Protein",
    "Cream of Rice",
    "Creatine",
    "BCAA+",
    "Pre-Workout",
    "Fitness Paketi",
    "Collagen",
    "Günlük Vitamin Paketi",
    "ZMA",
  ];
  return (
    <>
      <div className="min-[1700px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[32px] bg-[#222222]">
        <div className="py-10">
          <div className="flex items-end">
            <Stars count={5}></Stars>
            <p className="text-base text-white ml-2">(140.000+)</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-5">
            <p className="text-[32px] text-white py-3">
              LABORATUVAR TESTLİ ÜRÜNLER AYNI GÜN & ÜCRETSİZ KARGO MEMNUNİYET
              GARANTİSİ
            </p>
            <p className="text-xl text-white p-3">
              200.000'den fazla ürün yorumumuza dayanarak, ürünlerimizi
              seveceğinize eminiz. Eğer herhangi bir sebeple memnun kalmazsan,
              bizimle iletişime geçtiğinde çözüme kavuşturacağız.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row text-white gap-y-10 md:gap-y-0 justify-between">
          <div>
            <img
              src={logoWhite}
              alt="logo"
              className="w-[132px] h-[30px] mb-7 md:mb-0"
            />
            <p className="text-lg md:hidden" onClick={()=>handleToggle("OJS")}><span className="pr-2">{isOpen.OJS ? "-" : "+"}</span>OJS NUTRITION</p>
            <ul className={`text-[#999999] text-xs md:block py-2 ${isOpen.OJS ? "block" : "hidden"}`}>
              {FooterOJSTexts.map((f, index) => (
                <li key={index}>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-lg" onClick={()=>handleToggle("Kategoriler")}><span className="md:hidden pr-2">{isOpen.Kategoriler ? "-" : "+"}</span>Kategoriler</p>
            <ul className={`text-[#999999] text-xs md:block py-2 ${isOpen.Kategoriler ? "block" : "hidden"}`}>
              {FooterKategorilerTexts.map((f, index) => (
                <li key={index}>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-lg" onClick={()=>handleToggle("Popüler")}><span className="md:hidden pr-2">{isOpen.Popüler ? "-" : "+"}</span>Popüler Ürünler</p>
            <ul className={`text-[#999999] text-xs md:block py-2 ${isOpen.Popüler ? "block" : "hidden"}`}>
                {FooterPopülerTexts.map((f,index)=>(
                    <li key={index}>{f}</li>
                ))}
            </ul>
          </div>
        </div>
        <div className="text-[10px] text-[#999999] h-[160px]">
          <p className="pt-[100px]">Copyright © - Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
