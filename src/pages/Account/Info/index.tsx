import MailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";
import SaveButton from "./SaveButton";
import FullNameInput from "./FullNameInput";
import { useState } from "react";
const Info = () => {
  const [firstName, setFirstName] = useState("");  
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mailAddress, setMailAddress] = useState("");
  return (
    <>
      <div className="col-span-3">
        <div className="py-6">
          <p className="text-base font-semibold leading-7">Hesap Bilgilerim</p>
        </div>
        <div className="flex flex-col gap-4">
          <FullNameInput 
          firstName={firstName}
          lastName={lastName} 
          onFirstNameChange={(e) => setFirstName(e.target.value)}  // Update first name
          onLastNameChange={(e) => setLastName(e.target.value)} 
          />
          <PhoneInput phoneNumber={phoneNumber} onchange={(e)=>setPhoneNumber(e.target.value)}/>
          <MailInput mailAddress={mailAddress} onchange={(e)=>setMailAddress(e.target.value)}/>
          <SaveButton></SaveButton>
        </div>
      </div>
    </>
  );
};

export default Info;
