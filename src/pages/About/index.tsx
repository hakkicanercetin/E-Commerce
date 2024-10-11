import Stars from "../../layouts/common/Stars";
import Comments from "../../layouts/components/Comments";
import Certificates from "./Certificates";

const About = () => {
  return (
    <>
      <div className="min-[1700px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[32px] max-[767px]:px-4">
        <div>
          <p className="text-[30px] font-bold">
            Sağlıklı ve Fit Yaşamayı Zevkli ve Kolay Hale Getirmek İçin Varız
          </p>
          <p className="mt-6">
            2016 yılından beri sporcu gıdaları, takviye edici gıdalar ve
            fonksiyonel gıdaları üreten bir firma olarak; müşterilerimize en
            kaliteli, lezzetli, tüketilmesi kolay ürünleri sunuyoruz.
          </p>
          <p className="mt-6">
            Müşteri memnuniyeti ve sağlığı her zaman önceliğimiz olmuştur.
            Ürünlerimizde, yüksek kalite standartlarına bağlı olarak,
            sporcuların ve sağlıklı yaşam tutkunlarının ihtiyaçlarına yönelik
            besleyici çözümler sunuyoruz. Ürün yelpazemizdeki protein tozları,
            aminoasitler, vitamin ve mineral takviyeleri ile spor
            performansınızı desteklemek için ideal besin değerlerini sunuyoruz.
          </p>
          <p className="mt-6">
            Sizin için sadece en iyisinin yeterli olduğunu biliyoruz. Bu
            nedenle, inovasyon, kalite, sağlık ve güvenlik ilkelerimizi
            korurken, sürekli olarak ürünlerimizi geliştirmeye ve yenilikçi
            beslenme çözümleri sunmaya devam ediyoruz.
          </p>
          <p className="mt-6">
            Sporcu gıdaları konusunda lider bir marka olarak, sizin sağlığınıza
            ve performansınıza değer veriyoruz. Siz de spor performansınızı en
            üst seviyeye çıkarmak ve sağlıklı yaşam tarzınızı desteklemek
            istiyorsanız, bize katılın ve en besleyici çözümlerimizle tanışın.
            Sağlıklı ve aktif bir yaşam için biz her zaman yanınızdayız.
          </p>
          <p className="text-[30px] font-bold mt-6">
            1.000.000+ den Fazla Mutlu Müşteri
          </p>
          <p>
            Sanatçılardan profesyonel sporculara, doktordan öğrencilere hayatın
            her alanında sağlıklı yaşamı ve beslenmeyi hedefleyen 1.000.000'den
            fazla kişiye ulaştık.
          </p>
        </div>
        <div className="mt-10">
          <p className="text-[30px] font-bold">Sertifikalarımız</p>
          <Certificates></Certificates>
        </div>
        <div className="mt-[100px]">
          <div className="border-y-[1px] border-y-[#e3e3e3] py-3">
            <div className="flex items-center">
              <Stars count={5}></Stars>
              <p className="text-sm text-[#1f23aa] pl-3 mt-1">196900 Yorum</p>
            </div>
          </div>
        </div>
        <div className="py-3">
          <button className="rounded-full bg-custom-gradient text-white p-3 text-xs">
            Ürün İncelemeleri
          </button>
        </div>
        <div className="pb-20">
          <Comments></Comments>
          <Comments></Comments>
          <Comments></Comments>
        </div>
      </div>
    </>
  );
};

export default About;
