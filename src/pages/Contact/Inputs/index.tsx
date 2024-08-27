/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}
const Inputs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });


  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors: FormData = {};
    if (!formData.firstName) newErrors.firstName = "İsim gerekli.";
    if (!formData.email) newErrors.email = "E-posta gerekli.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Geçerli bir e-posta adresi girin.";
    if (!formData.message) newErrors.message = "Mesaj gerekli.";
    return newErrors;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      Object.values(validationErrors).forEach((error) => {
        if (error) toast.error(error);
      });
    } else {
      toast.success("Form başarıyla gönderildi!");
      setFormData({
        firstName:"",
        lastName:"",
        email:"",
        message:""
      })
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="py-5 text-start">
            <p className="text-sm leading-6 font-normal">
              Bize aşağıdaki iletişim ulaşabilirsiniz.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-full">
              <input
                type="text"
                name="firstName"
                placeholder="İsim*"
                className="border-[1px] border-solid border-[#e5e5e5] bg-[#f7f7f7] w-full p-3 rounded"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                name="lastName"
                placeholder="Soyisim"
                className="border-[1px] border-solid border-[#e5e5e5] bg-[#f7f7f7] w-full p-3 rounded"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full">
            <input
              type="email"
              name="email"
              placeholder="E-posta*"
              className="border-[1px] border-solid border-[#e5e5e5] bg-[#f7f7f7] w-full p-3 rounded"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <textarea
              rows={4}
              name="message"
              placeholder="Mesaj*"
              className="border-[1px] border-solid border-[#e5e5e5] bg-[#f7f7f7] w-full p-3 rounded"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="py-3 px-4 bg-black text-white text-xl font-semibold leading-7 rounded"
            >
              Gönder
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Inputs;
