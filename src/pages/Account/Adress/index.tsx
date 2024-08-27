import AdSoyadInput from "../Info/FullNameInput";
import PhoneInput from "../Info/PhoneInput";
import SaveButton from "../Info/SaveButton";
import AdresBaşlıkInput from "./HeaderInput";
import AdresInput from "./AdressInput";

const Adres = () => {
  return (
    <>
      <div className="col-span-3">
        <div className="py-6">
          <p className="text-base font-semibold leading-7">Adres Oluştur</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid gap-4 grid-cols-2">
            <AdresBaşlıkInput></AdresBaşlıkInput>
            <div className="col-span-1"></div>
          </div>
          <AdSoyadInput></AdSoyadInput>
          <AdresInput></AdresInput>
          <PhoneInput></PhoneInput>
          <SaveButton></SaveButton>
        </div>
      </div>
    </>
  );
};

export default Adres;
