import AdSoyadInput from "./FullNameInput";
import MailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";
import SaveButton from "./SaveButton";
const Info = () => {
  return (
    <>
      <div className="col-span-3">
        <div className="py-6">
          <p className="text-base font-semibold leading-7">Hesap Bilgilerim</p>
        </div>
        <div className="flex flex-col gap-4">
          <AdSoyadInput />
          <PhoneInput></PhoneInput>
          <MailInput />
          <SaveButton></SaveButton>
        </div>
      </div>
    </>
  );
};

export default Info;
