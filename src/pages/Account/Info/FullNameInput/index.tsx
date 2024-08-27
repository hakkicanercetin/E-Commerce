const AdSoyadInput = () => {
  return (
    <div className="grid gap-4 grid-cols-2">
      <div className="flex flex-col">
        <label htmlFor="isim">*Ad</label>
        <input
          type="text"
          id="isim"
          className="border-[1px] border-solid border-[#e5e5e5] bg-[#f7f7f7] p-4 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="soyisim">*Soyad</label>
        <input
          type="text"
          id="soyisim"
          className="border-[1px] border-solid border-[#e5e5e5] bg-[#f7f7f7] p-4 rounded"
        />
      </div>
    </div>
  );
};

export default AdSoyadInput;
