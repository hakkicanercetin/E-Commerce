import { AiOutlineControl } from "react-icons/ai";
import Info from "./Info";
import { LuPackage2 } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import Sipariş from "./Order";
import Adres from "./Adress";
import { Outlet, useParams } from "react-router";

const Account = () => {
  const [activeTab, setActiveTab] = useState("bilgi");
  const { id } = useParams();
  return (
    <>
      <div className="min-[1700px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[32px] max-[767px]:px-4">
        <div className="md:grid md:grid-cols-4">
          <div className=" col-span-1">
            <div className="py-6 md:block flex justify-center">
              <p className="text-[34px] font-bold leading-10">Hesabım</p>
            </div>
            <div className="flex justify-between md:justify-center md:block">
              <div
                className="flex items-center py-4 cursor-pointer"
                onClick={() => setActiveTab("bilgi")}
              >
                <AiOutlineControl className=" rotate-90" size={24} />
                <p
                  className={`text-sm leading-6 pl-1 md:pl-4 ${
                    !id && activeTab == "bilgi" ? "font-bold" : "font-normal"
                  }`}
                >
                  Hesap Bilgilerim
                </p>
              </div>
              <div
                className="flex items-center py-4 cursor-pointer"
                onClick={() => setActiveTab("sipariş")}
              >
                <LuPackage2 size={24} />
                <p
                  className={`text-sm leading-6 pl-1 md:pl-4 ${
                    !id && activeTab == "sipariş" ? "font-bold" : "font-normal"
                  }`}
                >
                  Siparişlerim
                </p>
              </div>
              <div
                className="flex items-center py-4 cursor-pointer"
                onClick={() => setActiveTab("adres")}
              >
                <IoLocationOutline size={24} />
                <p
                  className={`text-sm leading-6 pl-1 md:pl-4 ${
                    !id && activeTab == "adres" ? "font-bold" : "font-normal"
                  }`}
                >
                  Adreslerim
                </p>
              </div>
            </div>
          </div>
          {id ? (
            <Outlet></Outlet>
          ) : (
            <>
              {activeTab == "bilgi" && <Info></Info>}
              {activeTab == "sipariş" && <Sipariş></Sipariş>}
              {activeTab == "adres" && <Adres></Adres>}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Account;
