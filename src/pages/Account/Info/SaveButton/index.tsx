const SaveButton = ({onclick}:{onclick?:()=>void}) => {
  return (
    <div className="pt-4 pb-8 text-end rounded">
      <button className=" text-lg font-semibold leading-7 p-4 bg-black text-white" onClick={onclick}>
        Kaydet
      </button>
    </div>
  );
};

export default SaveButton;
