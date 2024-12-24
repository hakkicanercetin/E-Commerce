import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="border border-concrete px-4 py-10 md:p-10">
        <form>
          <div className="mb-4">
            <label>
              <div className="mb-2 font-medium">*E-Posta</div>
              <input
                className="w-full px-4 rounded h-12 border-[1px] border-solid border-[#e5e5e5] bg-[#f7f7f7]"
                type="email"
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              <div className="mb-2 text-brown font-medium">*Şifre</div>
              <input
                className="w-full px-4 rounded h-12 border-[1px] border-solid border-[#e5e5e5] bg-[#f7f7f7]"
                type="password"
              />
            </label>
          </div>
          <div className="my-4 text-right text-[15px]">
            <Link to="/account/forgot-password" className="cursor-pointer select-none text-black underline">
              Şifremi Unuttum?
            </Link>
          </div>
          <button
            type="submit"
            tabIndex={0}
            className="inline-flex justify-center items-center text-lg sm:text-xl text-white bg-black font-semibold px-5 rounded cursor-pointer w-full h-12"
          >
            GİRİŞ YAP
          </button>
        </form>
      </div>
  )
}

export default Login