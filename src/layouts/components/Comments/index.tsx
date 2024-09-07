import Stars from "../../common/Stars";

const Comments = () => {
  return (
    <div className="px-[10px] py-3">
      <div className=" bg-[#f7f7f7] px-6 rounded-[30px] pt-10">
        <div className="md:flex justify-between">
          <div className="md:flex">
            <div className="flex">
              <Stars count={5}></Stars>
            </div>
            <div className="flex items-center font-bold text-xl md:px-3">
              <p>EREN U.</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="font-bold text-[#333333]">06/05/24</p>
          </div>
        </div>
      <div className="py-5">
        <p className="font-bold text-xl">Her zamanki kalite. Teşekkürler</p>
      </div>
      <div className="pb-6">
        <p className="text-[#333333] font-normal">
          Her zamanki kalite. Teşekkürler
        </p>
      </div>
      </div>
    </div>
  );
};

export default Comments;
