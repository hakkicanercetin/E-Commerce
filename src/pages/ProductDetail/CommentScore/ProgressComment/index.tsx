import Stars from "../../../../layouts/common/Stars";

const ProgressComment = ({
  filledComment,
  totalComment,
  star
}: {
  filledComment: number;
  totalComment: number;
  star: number
}) => {
  return (
    <>
      <div className="md:grid md:grid-cols-12">
        <div className="col-span-6 hidden md:flex">
          <Stars count={star}></Stars>
        </div>
        <div className="grid grid-cols-6 col-span-6">
          <div className="col-span-5 flex flex-col justify-center">
            <div className="h-3 md:h-5 bg-[#EDEDED] my-0 relative">
              <div
                className={`h-full bg-[#2126AB]`}
                style={{ width: `${(filledComment / totalComment) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className=" col-span-1 flex justify-center items-center">
            <p className="text-[#1F23AA] text-[10px]">({filledComment})</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressComment;
