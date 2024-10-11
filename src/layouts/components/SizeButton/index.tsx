import { Variant } from "../../../Types/APIProduct";

const SizeButton = ({ variant, isActive, onClick }: { variant: Variant, isActive: boolean, onClick: () => void }) => {
  return (
    <div className="inline-flex flex-col">
      <button
      className={`flex flex-col bg-[#F6F7F8] border-[3px] border-solid relative ${isActive && "border-[#2126AB]"}`}
      onClick={onClick}
    >
      {variant.price.discount_percentage && (
        <div className="absolute top-0 left-1/4 transform -translate-y-3/4">
          <div className="relative bg-[#ed2727] text-white text-center text-xs px-2 -ml-2">
            <p>%{variant.price.discount_percentage} İNDİRİM</p>
          </div>
        </div>
      )}
      <div className="px-[35px] py-[10px]">
        {variant.size.gram && (
          <p className="leading-[22px] font-semibold">{variant.size.gram} gram</p>
        )}
        {variant.size.total_services && (
          <p className="text-xs leading-[22px] font-medium">{variant.size.pieces} x {variant.size.total_services} servis</p>
        )}
      </div>
    </button>
    </div>
  );
};

export default SizeButton;
