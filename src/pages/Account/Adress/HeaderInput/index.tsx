const AddressHeaderInput = ({addressHeader,onchange}:{addressHeader:string,onchange:(e: React.ChangeEvent<HTMLInputElement>) => void}) => {
  return (
    <div className="flex flex-col col-span-1">
      <label htmlFor="adresBaslik">*Adres Başlığı</label>
      <input
        type="text"
        id="adresBaslik"
        placeholder="Ev, iş vb."
        className="border-[1px] border-solid border-[#e5e5e5] bg-[#f7f7f7] p-4 rounded"
        value={addressHeader}
        onChange={onchange}
      />
    </div>
  );
};

export default AddressHeaderInput;
