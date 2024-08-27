import Stars from "../../common/Stars";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const SliderComments = () => {
  return (
    <>
        <div className="min-[1700px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[32px]">
            <div className="px-[15px] pt-[18px] pb-[11px] mb-[6px] border-b-2 border-solid border-[#e3e3e3]">
                <div className="flex justify-between">
                    <p>GERÇEK MÜŞTERİ YORUMLARI</p>
                    <div className="flex items-center">
                        <Stars></Stars>
                        <div>
                            <p>198453 Yorum</p>
                        </div>
                        <div className="flex items-center">
                            <FaChevronLeft></FaChevronLeft>
                            <FaChevronRight></FaChevronRight>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 py-[15px] gap-x-[25px]">
                <div className="pb-20">
                    <p className="text-xs text-[#6a6c77] italic">03/05/24</p>
                    <p className="font-bold text-[#4f4f4f] text-lg">Beğendim gayet güzeldi</p>
                    <p className="text-xs text-[#6a6c77] italic">Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.</p>
                </div>
                <div className="pb-20">
                    <p className="text-xs text-[#6a6c77] italic">03/05/24</p>
                    <p className="font-bold text-[#4f4f4f] text-lg">Beğendim gayet güzeldi</p>
                    <p className="text-xs text-[#6a6c77] italic">Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.</p>
                </div>
                <div className="pb-20">
                    <p className="text-xs text-[#6a6c77] italic">03/05/24</p>
                    <p className="font-bold text-[#4f4f4f] text-lg">Beğendim gayet güzeldi</p>
                    <p className="text-xs text-[#6a6c77] italic">Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.</p>
                </div>
                <div className="pb-20">
                    <p className="text-xs text-[#6a6c77] italic">03/05/24</p>
                    <p className="font-bold text-[#4f4f4f] text-lg">Beğendim gayet güzeldi</p>
                    <p className="text-xs text-[#6a6c77] italic">Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.</p>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default SliderComments