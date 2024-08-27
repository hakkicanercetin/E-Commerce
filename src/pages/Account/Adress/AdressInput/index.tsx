const AdresInput = () => {
  return (
    <>
      <div className="flex flex-col">
      <label htmlFor="adres">*Adres</label>
      <input
        type="text"
        id="adres"
        className="border-[1px] border-solid border-[#e5e5e5] bg-[#f7f7f7] p-4 rounded"
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="apartman">Apartman, Daire</label>
      <input
        type="text"
        id="apartman"
        className="border-[1px] border-solid border-[#e5e5e5] bg-[#f7f7f7] p-4 rounded"
      />
    </div>
    <div className="grid gap-4 grid-cols-2">
      <div className="flex flex-col">
        <label htmlFor="şehir">*Şehir</label>
        <input
          type="text"
          id="şehir"
          className="border-[1px] border-solid border-[#e5e5e5] bg-[#f7f7f7] p-4 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="ilçe">*İlçe</label>
        <input
          type="text"
          id="ilçe"
          className="border-[1px] border-solid border-[#e5e5e5] bg-[#f7f7f7] p-4 rounded"
        />
      </div>
    </div>
    </>
  )
}

export default AdresInput