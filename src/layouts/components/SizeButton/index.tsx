const SizeButton = ({text,subtext,id}) => {
  return (
    <>
      <div className="inline-flex flex-col m-1">
      <button className={`inline-flex justify-center items-center bg-[#F6F7F8] border-[3px] border-solid`}>
        <div className="px-[35px] py-[10px]">
          <p className="leading-[22px] font-semibold">{text}</p>
          <p className="text-xs leading-[22px] font-medium">{subtext}</p>
        </div>
      </button>
      </div>
    </>
  )
}

export default SizeButton