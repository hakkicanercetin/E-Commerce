type SizeButtonType = {
  text: string;
  subtext: string;
  discount?: number;
};
const SizeButton = ({ text, subtext, discount }: SizeButtonType) => {
  return (
    <div className="inline-flex flex-col">
      <button className="inline-flex flex-col bg-[#F6F7F8] border-[3px] border-solid relative">
        {discount && (
          <div className="absolute top-0 left-1/4 transform -translate-y-3/4">
            <div className="relative bg-[#ed2727] text-white text-center px-2">
              <p>%{discount} İNDİRİM</p>
            </div>
          </div>
        )}
        <div className="flex justify-center">
          <div className="px-[35px] py-[10px]">
            <p className="leading-[22px] font-semibold">{text}</p>
            <p className="text-xs leading-[22px] font-medium">{subtext}</p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default SizeButton;

