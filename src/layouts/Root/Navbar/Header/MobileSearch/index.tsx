import { CiSearch } from "react-icons/ci";

const MobilSearch = () => {
  return (
    <div className="flex items-center min-[767px]:hidden rounded-full w-full p-3 bg-[#f3f3f3] mb-3">
      <CiSearch className="text-3xl" />
      <input type="text" placeholder="Aradığınız ürünü yazınız" className="text-xl bg-[#f3f3f3] w-full ml-2"/>
    </div>
  );
};

export default MobilSearch;
