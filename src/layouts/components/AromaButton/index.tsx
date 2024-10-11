interface AromaButtonProps {
  name: string;
  onClick: () => void;
  isActive: boolean;
}
const Aromalar = [
  {
    name:"Bisküvi",
    color:"#E6BC79"
  },
  {
    name:"Çikolata",
    color:"#56321D"
  },
  {
    name:"Muz",
    color:"#F1D018"
  },
  {
    name:"Salted Caramel",
    color:"#B64300"
  },
  {
    name:"Choco Nut",
    color:"#7B3F00"
  },
  {
    name:"Hindistan Cevizi",
    color:"#BA9051"
  },
  {
    name:"Raspberry Cheesecake",
    color:"#CC1E5F"
  },
  {
    name:"Çilek",
    color:"#D61F33"
  },
]
const AromaButton = ({ name, onClick, isActive }: AromaButtonProps) => {
  const aromaColor = Aromalar.find((aroma) => aroma.name === name)?.color || "#343434";
  return (
    <>
      <div className="inline-flex flex-col">
      <button onClick={onClick} className={`flex justify-center items-center bg-[#F6F7F8] border-[3px] border-solid ${isActive && "border-[#2126AB]"}`}>
        <div className="flex justify-center items-center px-[23px] ">
          <p className="text-xs leading-[22px] font-medium">{name}</p>
        </div>
        <div className={`w-[20px]  h-[29px]`} style={{background:aromaColor}}></div>
      </button>
      </div>
    </>
  );
};

export default AromaButton;
