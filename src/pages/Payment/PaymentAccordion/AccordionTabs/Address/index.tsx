import { useState } from "react";
import AddressRadio from "./AddressRadio";
import AddressInput from "../../../../Account/Adress/AdressInput";
import FullNameInput from "../../../../Account/Info/FullNameInput";
import PhoneInput from "../../../../Account/Info/PhoneInput";
import useAddressStore from "../../../../../stores/AddressStore/useAddress";
import AddressHeaderInput from "../../../../Account/Adress/HeaderInput";
import toast, { Toaster } from 'react-hot-toast';
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

const AccordionAddress = ({
  handleNextTab,
  handleBack,
}: {
  handleNextTab: () => void;
  handleBack: () => void;
}) => {
  const { addresses, addAddress } = useAddressStore();
  const [selectedAddress, setSelectedAddress] = useState<AddressType | null>();
  const [isAddingAddress, setIsAddingAddress] = useState(false); // Yeni adres ekleme modu
  const [newAddress, setNewAddress] = useState<AddressType>({
    id: 0,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    addressHeader: "",
    apartment: "",
    city: "",
    district: "",
  });

  const handleSaveNewAddress = () => {
    const newId =
      addresses.length > 0 ? Math.max(...addresses.map((a) => a.id)) + 1 : 1;

    // Save the new address using the newAddress state
    const addressData = {
      ...newAddress,
      id: newId,
    };

    addAddress(addressData);

    // Clear the form after saving
    setNewAddress({
      id: 0,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      addressHeader: "",
      apartment: "",
      city: "",
      district: "",
    });
    setIsAddingAddress(false);
    handleBack();
  };
  const handleNext = () => {
    if (!selectedAddress) {
      toast.error("Lütfen bir adres seçin veya yeni bir adres ekleyin!")
      return;
    }
    handleNextTab();
  };
  return (
    <>
      <div>
        {isAddingAddress ? (
          <div className="space-y-4">
            <AddressHeaderInput
              addressHeader={newAddress.addressHeader}
              onchange={(e) =>
                setNewAddress({
                  ...newAddress,
                  addressHeader: e.target.value,
                })
              }
            ></AddressHeaderInput>
            <FullNameInput
              firstName={newAddress.firstName}
              onFirstNameChange={(e) =>
                setNewAddress({
                  ...newAddress,
                  firstName: e.target.value,
                })
              }
              lastName={newAddress.lastName}
              onLastNameChange={(e) =>
                setNewAddress({
                  ...newAddress,
                  lastName: e.target.value,
                })
              }
            ></FullNameInput>
            <AddressInput
              address={newAddress.address}
              onAddressChange={(e) =>
                setNewAddress({ ...newAddress, address: e.target.value })
              }
              apartment={newAddress.apartment}
              onApartmentChange={(e) =>
                setNewAddress({
                  ...newAddress,
                  apartment: e.target.value,
                })
              }
              city={newAddress.city}
              onCityChange={(e) =>
                setNewAddress({ ...newAddress, city: e.target.value })
              }
              district={newAddress.district}
              onDistrictChange={(e) =>
                setNewAddress({ ...newAddress, district: e.target.value })
              }
            />
            <PhoneInput
              phoneNumber={newAddress.phoneNumber}
              onchange={(e) =>
                setNewAddress({
                  ...newAddress,
                  phoneNumber: e.target.value,
                })
              }
            ></PhoneInput>
            <div className="py-4">
              <button
                className="bg-black py-4 text-white w-full rounded-lg"
                onClick={handleSaveNewAddress}
              >
                Kaydet
              </button>
            </div>
          </div>
        ):(
          <div>
        <p>Teslimat Adresi</p>
        <div className="flex flex-col">
          {addresses.map((address) => (
            <AddressRadio
              key={address.id}
              address={address}
              onSelect={() => setSelectedAddress(address)}
            />
          ))}
          <AddressRadio
            onSelect={() => {
              setIsAddingAddress(true);
              setSelectedAddress(null);
            }}
          />
        </div>
        <div className="py-4">
        <button
          className="bg-black py-4 text-white w-full rounded-lg"
          onClick={handleNext}
        >
          Devam Et
        </button>
      </div>
      </div>
        )}
      </div>
      <Toaster></Toaster>
    </>
  );
};

export default AccordionAddress;
