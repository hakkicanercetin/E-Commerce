type AddressType = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  addressHeader: string;
  apartment: string;
  city: string;
  district: string;
};

const AddressRadio = ({
  address,
  onSelect,
}: {
  address?: AddressType | null;
  onSelect: () => void;
}) => {
  return (
    <div className="py-4">
      <label
        className="border-2 border-[#2126AB] rounded-lg p-4 flex items-center justify-between cursor-pointer transition-all duration-200 hover:shadow-md"
        onClick={onSelect}
      >
        <div className="flex">
          <input name="plan" type="radio" className="hidden peer" />
          <div className="w-6 h-6 rounded-full border-2 border-[#2126AB] flex items-center justify-center mr-4 mt-1 bg-white peer-checked:bg-black peer-checked:border-black relative">
            <div className="w-2 h-[14px] mb-[3px] ml-[1px] bg-transparent rotate-45 border-b-[1px] border-r-[1px] border-white peer-checked:block absolute"></div>
          </div>
          {address ? (
            <div>
              <p className="text-lg font-semibold">{address.addressHeader}</p>
              <p className="text-sm text-gray-500 py-4">
                {address.address}, {address.apartment}, {address.city}, {address.district}
              </p>
            </div>
          ) : (
            <div>
              <p className="text-lg font-semibold">Yeni Adres</p>
            </div>
          )}
        </div>
      </label>
    </div>
  );
};


export default AddressRadio;
