type AddressInputProps = {
  address: string;
  onAddressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  apartment: string;
  onApartmentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  city: string;
  onCityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  district: string;
  onDistrictChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const AddressInput = ({address,onAddressChange,apartment,onApartmentChange,city,onCityChange,district,onDistrictChange}:AddressInputProps) => {
  return (
    <>
      <div className="flex flex-col">
      <label htmlFor="adres">*Adres (Mahalle,Sokak)</label>
      <input
        type="text"
        id="adres"
        className="border-[1px] border-solid border-[#e5e5e5] bg-[#f7f7f7] p-4 rounded"
        value={address}
        onChange={onAddressChange}
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="apartman">Apartman, Daire No.</label>
      <input
        type="text"
        id="apartman"
        className="border-[1px] border-solid border-[#e5e5e5] bg-[#f7f7f7] p-4 rounded"
        value={apartment}
        onChange={onApartmentChange}
      />
    </div>
    <div className="grid gap-4 grid-cols-2">
      <div className="flex flex-col">
        <label htmlFor="şehir">*Şehir</label>
        <input
          type="text"
          id="şehir"
          className="border-[1px] border-solid border-[#e5e5e5] bg-[#f7f7f7] p-4 rounded"
          value={city}
          onChange={onCityChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="ilçe">*İlçe</label>
        <input
          type="text"
          id="ilçe"
          className="border-[1px] border-solid border-[#e5e5e5] bg-[#f7f7f7] p-4 rounded"
          value={district}
          onChange={onDistrictChange}
        />
      </div>
    </div>
    </>
  )
}

export default AddressInput