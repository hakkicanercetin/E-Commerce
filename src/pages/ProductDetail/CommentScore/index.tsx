import Stars from "../../../layouts/common/Stars";
import Comments from "../../../layouts/components/Comments";
import ProgressComment from "./ProgressComment";

const CommentScore = ({
  score,
  totalComment,
}: {
  score: number;
  totalComment: number;
}) => {
  const starNumber = Math.round(score);
  return (
    <>
      <div className="min-[1700px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[32px]">
        <div className="md:grid md:grid-cols-2 mt-40">
          <div className="md:col-span-1 md:grid md:grid-cols-2 flex justify-center items-center">
            <div className="col-span-1 text-center">
              <div className="inline-flex">
                <p className=" text-4xl">{score}</p>
              </div>
              <div className="">
                <Stars count={starNumber}></Stars>
              </div>
              <div>
                <p>{totalComment} Yorum</p>
              </div>
            </div>
            <div className="md:col-span-1"></div>
          </div>
          <div>
          <ProgressComment totalComment={totalComment} filledComment={9284} star={5}></ProgressComment>
          <ProgressComment totalComment={totalComment} filledComment={1316} star={4}></ProgressComment>
          <ProgressComment totalComment={totalComment} filledComment={226} star={3}></ProgressComment>
          <ProgressComment totalComment={totalComment} filledComment={32} star={2}></ProgressComment>
          <ProgressComment totalComment={totalComment} filledComment={11} star={1}></ProgressComment>
          </div>
        </div>
        <div className="p-5">
          <button className="bg-custom-gradient text-white rounded-full p-3 text-xs">Yorum ({totalComment})</button>
        </div>
        <Comments></Comments>
        <Comments></Comments>
        <Comments></Comments>
        <Comments></Comments>
        <Comments></Comments>
      </div>
    </>
  );
};

export default CommentScore;
