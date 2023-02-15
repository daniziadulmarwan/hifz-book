import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  HiOutlineCurrencyDollar,
  HiOutlineHome,
  HiOutlineUsers,
} from "react-icons/hi2";

export default function Dashboard() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="w-full overflow-x-hidden flex overflow-y-hidden">
      {/* START: Sidebar */}
      <Sidebar openSidebar={openSidebar} />
      {/* END: Sidebar */}

      <div className="w-full h-screen">
        {/* START: Navbar */}
        <Navbar
          openSidebar={openSidebar}
          setOpenSidebar={(e) => setOpenSidebar(e)}
        />
        {/* END: Navbar */}

        <main className="w-full h-full bg-gray-100 px-3 pt-3 overflow-x-auto">
          {/* START: Main Content */}
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="card w-full lg:w-1/4 bg-white flex items-center py-7 px-5">
              <div className="w-16 h-16 rounded-full bg-sky-200 grid place-items-center">
                <HiOutlineHome size={32} className="text-white" />
              </div>
              <div className="ml-3">
                <h1 className="text-2xl text-slate-900 roboto-font">
                  Jenis Lembaga
                </h1>
                <p>Pondok Pesantren</p>
              </div>
            </div>

            <div className="card w-full lg:w-1/4 bg-white flex items-center py-7 px-5">
              <div className="w-16 h-16 rounded-full bg-yellow-400 grid place-items-center">
                <HiOutlineUsers size={32} className="text-white" />
              </div>
              <div className="ml-3">
                <h1 className="text-2xl text-slate-900 roboto-font">
                  Jumlah Santri
                </h1>
                <p>15</p>
              </div>
            </div>

            <div className="card w-full lg:w-1/4 bg-white flex items-center py-7 px-5">
              <div className="w-16 h-16 rounded-full bg-lime-300 grid place-items-center">
                <HiOutlineUsers size={32} className="text-white" />
              </div>
              <div className="ml-3">
                <h1 className="text-2xl text-slate-900 roboto-font">
                  Jumlah Ustadz
                </h1>
                <p>8</p>
              </div>
            </div>

            <div className="card w-full lg:w-1/4 bg-white flex items-center py-7 px-5">
              <div className="w-16 h-16 rounded-full bg-pink-400 grid place-items-center">
                <HiOutlineCurrencyDollar size={32} className="text-white" />
              </div>
              <div className="ml-3">
                <h1 className="text-2xl text-slate-900 roboto-font">
                  Jumlah Penghasilan
                </h1>
                <p>Rp. 15.000.000,00/Bulan</p>
              </div>
            </div>
          </div>

          <div>
            <div className="card w-full bg-white h-20 mt-3">
              <h5 className="text-2xl text-center mt-5">Chart</h5>
            </div>
          </div>
          {/* END: Main Content */}
        </main>
      </div>
    </div>
  );
}
