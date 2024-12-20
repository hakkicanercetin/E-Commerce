import FullNameInput from "../Info/FullNameInput";
import PhoneInput from "../Info/PhoneInput";
import SaveButton from "../Info/SaveButton";
import AddressHeaderInput from "./HeaderInput";
import AddressInput from "./AdressInput";
import { useState } from "react";
import { BiPlus, BiTrash } from "react-icons/bi";
import useAddressStore from "../../../stores/AddressStore/useAddress";
import { FaEdit } from "react-icons/fa";

interface AddressData {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  addressHeader: string;
  apartment: string;
  city: string;
  district: string;
}

const Address = () => {
  const {
    addresses,
    addAddress,
    updateAddress,
    deleteAddress,
  } = useAddressStore();
  const [firstName, setFirstName] = useState("");  
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [addressHeader, setAddressHeader] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editMode, setEditMode] = useState(false); // To toggle between showing the form or saved addresses

  const handleSave = () => {
    const addressData = {
      id: editId !== null ? editId : Date.now(),
      firstName,
      lastName,
      phoneNumber,
      address,
      addressHeader,
      apartment,
      city,
      district,
    };

    if (editId !== null) {
      updateAddress(addressData);
      setEditId(null);
    } else {
      addAddress(addressData);
    }

    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setAddress("");
    setAddressHeader("");
    setApartment("");
    setCity("");
    setDistrict("");
    setEditMode(false);
  };

  const handleDelete = (id: number) => {
    deleteAddress(id);
  };

  const handleEdit = (address: AddressData) => {
    setFirstName(address.firstName);
    setLastName(address.lastName);
    setPhoneNumber(address.phoneNumber);
    setAddress(address.address);
    setAddressHeader(address.addressHeader);
    setApartment(address.apartment);
    setCity(address.city);
    setDistrict(address.district);
    setEditId(address.id);
    setEditMode(true);
  };

  const handleNewAddress = () => {
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setAddress("");
    setAddressHeader("");
    setApartment("");
    setCity("");
    setDistrict("");
    setEditId(null);
    setEditMode(true);
  };

  return (
    <div className="col-span-3">
      <div className="py-6 flex justify-between">
        <div>
          <p className="text-base font-semibold leading-7">
          {editMode ? (editId !== null ? "Adresi Düzenle" : "Adres Oluştur") : "Adreslerim"}
          </p>
        </div>
        {!editMode && (
          <div className="flex items-center cursor-pointer" onClick={handleNewAddress}>
            <BiPlus />
            <p className="pl-2">Yeni Adres Oluştur</p>
          </div>
        )}
      </div>
      
      <div className="flex flex-col gap-4">
        {editMode ? (
          <>
            <div className="grid gap-4 grid-cols-2">
              <AddressHeaderInput 
                addressHeader={addressHeader} 
                onchange={(e) => setAddressHeader(e.target.value)} 
              />
              <div className="col-span-1"></div>
            </div>
            <FullNameInput 
              firstName={firstName} 
              lastName={lastName} 
              onFirstNameChange={(e) => setFirstName(e.target.value)} 
              onLastNameChange={(e) => setLastName(e.target.value)} 
            />
            <AddressInput 
              address={address} 
              onAddressChange={(e) => setAddress(e.target.value)} 
              apartment={apartment} 
              onApartmentChange={(e) => setApartment(e.target.value)} 
              city={city} 
              onCityChange={(e) => setCity(e.target.value)} 
              district={district} 
              onDistrictChange={(e) => setDistrict(e.target.value)} 
            />
            <PhoneInput 
              phoneNumber={phoneNumber} 
              onchange={(e) => setPhoneNumber(e.target.value)} 
            />
            <SaveButton onclick={handleSave} />
          </>
        ) : (
          <>
            {addresses.length > 0 ? (
              <div className="grid grid-cols-3 gap-4">
                {addresses.map((address) => (
                  <div key={address.id} className="col-span-1 p-4 border-[1px] border-black rounded-lg">
                    <p>{address.addressHeader}</p>
                    <div className="py-8">
                      <p>{address.address}, {address.apartment}, {address.city}, {address.district}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <button className="flex items-center" onClick={() => handleDelete(address.id)}>
                        <BiTrash size={20} />
                        <p className="pl-2">Sil</p>
                      </button>
                      <button className="flex items-center" onClick={() => handleEdit(address)}>
                      <FaEdit size={20}/>
                        <p className="pl-2">Düzenle</p>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-[#2126AB1A] p-4 rounded-lg">
                <p>Kayıtlı bir adresiniz yok. Lütfen adres oluşturunuz.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Address;
