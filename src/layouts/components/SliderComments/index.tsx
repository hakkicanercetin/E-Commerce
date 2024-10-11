import { useBlazeSlider } from "../../../hooks/Slider/BlazeSlider";
import Stars from "../../common/Stars";
import "blaze-slider/dist/blaze.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const SliderComments = () => {
  const { sliderElRef } = useBlazeSlider({
    all: {
      slidesToShow: 3,
      enableAutoplay: true,
      autoplayInterval: 2000,
      transitionDuration: 300,
    },
    "(max-width: 900px)": {
      slidesToShow: 2,
    },
    "(max-width: 500px)": {
      slidesToShow: 1,
    },
  });
  const dummyComments = [
    {
      date: "15/06/24",
      title: "Harika Bir Ürün!",
      comment:
        "Ürünü birkaç haftadır kullanıyorum ve gerçekten memnun kaldım. Kalitesi çok iyi ve fiyatı da oldukça uygun. Tavsiye ederim!",
    },
    {
      date: "16/06/24",
      title: "Beklentilerimin Üstünde",
      comment:
        "Ürünü alırken biraz tereddüt etmiştim, ama kesinlikle doğru bir karar vermişim. Hem şık hem de işlevsel. Kesinlikle tekrar alırım.",
    },
    {
      date: "17/06/24",
      title: "İlk İzlenimim Olumsuz",
      comment:
        "Ürün geldiğinde beklentimi karşılamadı. Görseldekiyle arasında fark vardı ve kalitesi de beklediğim gibi çıkmadı. İade etmeyi düşünüyorum.",
    },
    {
      date: "18/06/24",
      title: "Çok Pratik",
      comment:
        "Bu ürünü kullanmaya başladıktan sonra hayatım çok kolaylaştı. Gerçekten pratik ve kullanımı çok rahat. Herkese öneririm!",
    },
    {
      date: "19/06/24",
      title: "Fiyat/Performans Harika!",
      comment:
        "Bu fiyata bu kadar kaliteli bir ürün bulmak zor. Performansı beklediğimden çok daha iyi. Hem dayanıklı hem de şık bir tasarıma sahip. Alacaklara öneririm!",
    },
  ];
  return (
    <>
      <div className="min-[1700px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[32px]">
        <div className="px-[15px] pt-[18px] pb-[11px] mb-[6px] border-b-2 border-solid border-[#e3e3e3]">
          <div className="md:grid md:grid-cols-2">
            <div className=" col-span-1">
              <p className=" font-bold">GERÇEK MÜŞTERİ YORUMLARI</p>
            </div>
            <div className="flex justify-between md:justify-end items-center col-span-1">
              <div className="flex items-center">
                <Stars count={5}></Stars>
                <p>198453 Yorum</p>
              </div>
              <div className="flex items-center">
                <FaChevronLeft size={16}></FaChevronLeft>
                <FaChevronRight size={16}></FaChevronRight>
              </div>
            </div>
          </div>
        </div>
        <div className="" ref={sliderElRef}>
          <div className="blaze-container">
            <div className="blaze-track-container">
              <div className="blaze-track">
                {dummyComments.map((dComment, index) => (
                  <div className="pb-20" key={index}>
                    <p className="text-xs text-[#6a6c77] italic">
                      {dComment.date}
                    </p>
                    <p className="font-bold text-[#4f4f4f] text-lg">
                      {dComment.title}
                    </p>
                    <p className="text-xs text-[#6a6c77] italic">
                      {dComment.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 py-[15px] gap-x-[25px]"></div>
      </div>
    </>
  );
};

export default SliderComments;
