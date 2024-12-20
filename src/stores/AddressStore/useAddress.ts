import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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

interface AddressStore {
  addresses: AddressData[];
  addAddress: (address: AddressData) => void;
  updateAddress: (address: AddressData) => void;
  deleteAddress: (id: number) => void;
}

const useAddressStore = create(
  persist<AddressStore>(
    (set) => ({
      addresses: [],
      addAddress: (address) =>
        set((state) => ({
          addresses: [...state.addresses, address],
        })),
      updateAddress: (updatedAddress) =>
        set((state) => ({
          addresses: state.addresses.map((addr) =>
            addr.id === updatedAddress.id ? updatedAddress : addr
          ),
        })),
      deleteAddress: (id) =>
        set((state) => ({
          addresses: state.addresses.filter((addr) => addr.id !== id),
        })),
    }),
    {
      name: "address-storage", // Key name for localStorage
      storage: createJSONStorage(() => localStorage), // Properly wrap localStorage
    }
  )
);

export default useAddressStore;
