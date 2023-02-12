import React from "react";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import Dropdown from "../Dropdown";

function Navbar({ openSidebar, setOpenSidebar }) {
  return (
    <div className="bg-white h-20 shadow-sm flex items-center justify-between px-3">
      <div
        onClick={() => setOpenSidebar(!openSidebar)}
        className="lg:hidden w-10 h-10 rounded-full bg-sky-50 grid place-items-center cursor-pointer"
      >
        <HiOutlineBars3CenterLeft size={22} className="text-sky-500" />
      </div>
      <div className="hidden lg:block border border-gray-100 rounded-md px-5 py-3 cursor-pointer uppercase">
        <p>Logo Pesantren</p>
      </div>

      <div>
        <Dropdown />
      </div>
    </div>
  );
}

export default Navbar;
