import { useState } from "react";
import FullNameInput from "../../Account/Info/FullNameInput";
import PhoneInput from "../../Account/Info/PhoneInput";
import MailInput from "../../Account/Info/EmailInput";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mailAddress, setMailAddress] = useState("");
  return (
    <div className="border border-concrete px-4 py-10 md:p-10">
      <div className="pb-5">
        <FullNameInput
          firstName={firstName}
          onFirstNameChange={(e) => setFirstName(e.target.value)}
          lastName={lastName}
          onLastNameChange={(e) => setLastName(e.target.value)}
        ></FullNameInput>
        <PhoneInput
          phoneNumber={phoneNumber}
          onchange={(e) => setPhoneNumber(e.target.value)}
        ></PhoneInput>
        <MailInput
          mailAddress={mailAddress}
          onchange={(e) => setMailAddress(e.target.value)}
        ></MailInput>
        <div className="flex flex-col">
      <label htmlFor="password">*Şifre</label>
      <input
        type="password"
        id="password"
        className="border-[1px] border-solid border-[#e5e5e5] bg-[#f7f7f7] p-4 rounded"
      />
    </div>
      </div>
      <button
        type="submit"
        tabIndex={0}
        className="inline-flex justify-center items-center text-lg sm:text-xl text-white bg-black font-semibold px-5 rounded cursor-pointer w-full h-12"
      >
        ÜYE OL
      </button>
    </div>
  );
};

export default Register;
