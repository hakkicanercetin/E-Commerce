import image from "../../../assets/header1.png"
import image2 from "../../../assets/header2.png"
import image3 from "../../../assets/header3.png"
const Delivery = () => {
  return (
        <>
            <div className="min-[1700px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[32px] max-[767px]:hidden">
                <div className="flex">
                    <div className="flex w-[400px] justify-center py-3 text-center">
                        <img src={image} className="h-4 w-4" alt="delivery" />
                        <strong className="text-[11px] ml-1">AYNI GÜN KARGO</strong><span className="text-[11px]">&nbsp;-&nbsp;</span><p className="text-[11px]">16:00’DAN ÖNCEKİ SİPARİŞLERDE</p>
                    </div>
                    <div className="flex w-[400px] justify-center py-3 text-center">
                        <img src={image2} className="h-4 w-4" alt="delivery" />
                        <strong className="text-[11px] ml-1">ÜCRETSİZ KARGO</strong><span className="text-[11px]">&nbsp;-&nbsp;</span><p className="text-[11px]">100 TL ÜZERİ SİPARİŞLERDE</p>
                    </div>
                    <div className="flex w-[400px] justify-center py-3 text-center">
                        <img src={image3} className="h-4 w-4" alt="delivery" />
                        <strong className="text-[11px] ml-1">GÜVENLİ ALIŞVERİŞ</strong><span className="text-[11px]">&nbsp;-&nbsp;</span><p className="text-[11px]">1.000.000+ MUTLU MÜŞTERİ</p>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Delivery