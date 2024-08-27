import classes from "./index.module.css";
import { FaChevronRight } from "react-icons/fa";
const MobilNav = ({isOpen}:{isOpen:boolean}) => {
  return (
    <div className={isOpen ? classes.ggz : classes.ggs}>
            <ul className="px-2 bg-white">
            <li className="text-base flex py-2 justify-between items-center">
                PROTEİN
                <FaChevronRight className="text-base"/>
              </li>
              <li className="text-base flex py-2 justify-between items-center">
                SPOR GIDALARI
                <FaChevronRight className="text-base"/>
              </li>
              <li className="text-base flex py-2 justify-between items-center">
                SAĞLIK
                <FaChevronRight className="text-base"/>
              </li>
              <li className="text-base flex py-2 justify-between items-center">
                GIDA
                <FaChevronRight className="text-base"/>
              </li>
              <li className="text-base flex py-2 justify-between items-center">
                VİTAMİN
                <FaChevronRight className="text-base"/>
              </li>
              <li className="text-base flex py-2 justify-between items-center">
                TÜM ÜRÜNLER
              </li>
            </ul>
            <ul className="bg-[#e5e5e5] px-2 h-80">
              <li className="text-base py-2">HESABIM</li>
              <li className="text-base py-2">MÜŞTERİ YORUMLARI</li>
              <li className="text-base py-2">İLETİŞİM</li>
            </ul>
          </div>
  )
}

export default MobilNav