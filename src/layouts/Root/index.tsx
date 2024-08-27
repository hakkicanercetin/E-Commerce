import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
