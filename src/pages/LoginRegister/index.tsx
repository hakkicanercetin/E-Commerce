import { Link, useLocation } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const LoginRegister = () => {
  const location = useLocation();
  const activeTab = location.pathname.includes("login") ? "login" : "register";
  return (
    <div className="min-[1700px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[32px] max-[767px]:px-4 py-5">
      <div className="relative grid grid-cols-2 gap-4">
      <Link
          to="/login"
          className={`flex items-center justify-center font-medium text-xl border border-b-0 bg-white py-4 ${
            activeTab === "login" ? "bg-gray-200" : ""
          }`}
        >
          Giriş Yap
        </Link>
        <Link
          to="/register"
          className={`flex items-center justify-center font-medium text-xl border border-b-0 py-4 ${
            activeTab === "register" ? "bg-gray-200" : ""
          }`}
        >
          Üye Ol
        </Link>
      </div>
      {activeTab == "login" ? <Login/> :<Register/>}
    </div>
  );
};

export default LoginRegister;
