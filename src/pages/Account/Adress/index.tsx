import FullNameInput from "../Info/FullNameInput";
import PhoneInput from "../Info/PhoneInput";
import SaveButton from "../Info/SaveButton";
import AddressHeaderInput from "./HeaderInput";
import AddressInput from "./AdressInput";
import { useEffect, useState } from "react";
import { BiPlus, BiTrash } from "react-icons/bi";

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
  const [firstName, setFirstName] = useState("");  
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [addressHeader, setAddressHeader] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [addresses, setAddresses] = useState<AddressData[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [editMode, setEditMode] = useState(false); // To toggle between showing the form or saved addresses

  const handleSave = () => {
    const addressData: AddressData = {
      id: editId !== null ? editId : Date.now(), // Use editId if editing, otherwise generate a new id
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
      // Update existing address
      const updatedAddresses = addresses.map((addr) =>
        addr.id === editId ? addressData : addr
      );
      setAddresses(updatedAddresses);
      setEditId(null);
    } else {
      // Add new address
      setAddresses((prev) => [...prev, addressData]);
    }

    // Save addresses to localStorage
    localStorage.setItem("addresses", JSON.stringify([...addresses, addressData]));

    // Clear input fields after save
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setAddress("");
    setAddressHeader("");
    setApartment("");
    setCity("");
    setDistrict("");

    setEditMode(false); // Exit edit mode after saving
  };

  useEffect(() => {
    const storedAddresses = localStorage.getItem("addresses");
    if (storedAddresses) {
      setAddresses(JSON.parse(storedAddresses));
    }
  }, []);

  const handleDelete = (id: number) => {
    const updatedAddresses = addresses.filter((address) => address.id !== id);
    setAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
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
    setEditMode(true); // Enter edit mode
  };

  const handleNewAddress = () => {
    // Clear form fields for new address
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
          // Show form to create or edit address
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
          // Show saved addresses if available
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
                      <button className="p-2" onClick={() => handleEdit(address)}>
                        Adresi Düzenle
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
