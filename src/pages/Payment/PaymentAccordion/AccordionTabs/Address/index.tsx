import { useState } from "react";
import AddressRadio from "./AddressRadio";
import AddressHeaderInput from "../../../../Account/Adress/HeaderInput";
import AddressInput from "../../../../Account/Adress/AdressInput";
import { ClipLoader } from "react-spinners";
type AddressType = {
  header: string;
  address: string;
};

type TabContentType = {
  name: string;
  TR: string;
  content?: AddressType[];
};
type TabsType = TabContentType[];
const AccordionAddress = ({
  handleNextTab,
  tabs,
}: {
  handleNextTab: () => void;
  tabs: TabsType;
}) => {
  const [selectedAddress, setSelectedAddress] = useState<AddressType | null>();
  const [loading, setLoading] = useState(false);
  const handleSelectAddress = async (address: AddressType | null) => {
    setSelectedAddress(address);
  };
  const handleLoading = async ()=>{
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  }
  return (
    <>
      {selectedAddress === null ? (
        <div>
          {loading ? (
            <div className="flex justify-center">
              <ClipLoader />
            </div>
          ) : (
            <>
              <AddressHeaderInput />
              <AddressInput />
            </>
          )}
        </div>
      ) : (
        <div>
          <p>Teslimat Adresi</p>
          <div className="flex flex-col">
            {tabs.map((tab) =>
              tab.content?.map((t, index) => (
                <AddressRadio
                  key={index}
                  address={t}
                  onSelect={() => handleSelectAddress(t)}
                ></AddressRadio>
              ))
            )}
            <AddressRadio
              onSelect={() => {handleSelectAddress(null),handleLoading()}}
            ></AddressRadio>
          </div>
        </div>
      )}
      {!loading && (
        <div className=" py-4">
          <button
            className=" bg-black py-4 text-white w-full rounded-lg"
            onClick={handleNextTab}
          >
            Kaydet
          </button>
        </div>
      )}
      {/* <AddressHeaderInput></AddressHeaderInput>
    <AddressInput></AddressInput>
    <button className=" bg-black text-white py-4 w-full rounded-lg" onClick={handleNextTab}>Kaydet</button> */}
    </>
  );
};

export default AccordionAddress;
