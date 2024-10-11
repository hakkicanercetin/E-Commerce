import { AiOutlineControl } from "react-icons/ai";
import { LuPackage2 } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { Outlet, useLocation, useNavigate } from "react-router";

const Account = () => {
  const activeTab = useLocation()
  const navigate = useNavigate();
  const handleTabClick = (path: string) => {
    navigate(path);
  };
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
                onClick={() => handleTabClick("/info")}
              >
                <AiOutlineControl className=" rotate-90" size={24} />
                <p
                  className={`text-sm leading-6 pl-1 md:pl-4 ${
                    activeTab.pathname == "/info" ? "font-bold" : "font-normal"
                  }`}
                >
                  Hesap Bilgilerim
                </p>
              </div>
              <div
                className="flex items-center py-4 cursor-pointer"
                onClick={() => handleTabClick("/order")}
              >
                <LuPackage2 size={24} />
                <p
                  className={`text-sm leading-6 pl-1 md:pl-4 ${
                    activeTab.pathname == "/order" ? "font-bold" : "font-normal"
                  }`}
                >
                  Siparişlerim
                </p>
              </div>
              <div
                className="flex items-center py-4 cursor-pointer"
                onClick={() => handleTabClick("/address")}
              >
                <IoLocationOutline size={24} />
                <p
                  className={`text-sm leading-6 pl-1 md:pl-4 ${
                    activeTab.pathname == "/address" ? "font-bold" : "font-normal"
                  }`}
                >
                  Adreslerim
                </p>
              </div>
            </div>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Account;
