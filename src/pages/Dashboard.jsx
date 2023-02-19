import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi2";
import { axiosJwt } from "../config/api";

export default function Dashboard() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [totalSantri, setTotalSantri] = useState(0);

  const getTotlaSantri = () => {
    axiosJwt.get("/santri/getAllSantri").then((res) => {
      setTotalSantri(res.data.data.length);
    });
  };

  useEffect(() => {
    getTotlaSantri();
  }, []);

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
            <div className="card w-full lg:w-1/3 bg-white flex items-center py-7 px-5">
              <div className="w-16 h-16 rounded-full bg-sky-200 grid place-items-center">
                <HiOutlineHome size={32} className="text-white" />
              </div>
              <div className="ml-3">
                <h1 className="text-2xl text-slate-900">Jenis Lembaga</h1>
                <p>Pondok Pesantren</p>
              </div>
            </div>

            <div className="card w-full lg:w-1/3 bg-white flex items-center py-7 px-5">
              <div className="w-16 h-16 rounded-full bg-yellow-400 grid place-items-center">
                <HiOutlineUsers size={32} className="text-white" />
              </div>
              <div className="ml-3">
                <h1 className="text-2xl text-slate-900">Jumlah Santri</h1>
                <p>{totalSantri}</p>
              </div>
            </div>

            <div className="card w-full lg:w-1/3 bg-white flex items-center py-7 px-5">
              <div className="w-16 h-16 rounded-full bg-lime-300 grid place-items-center">
                <HiOutlineUsers size={32} className="text-white" />
              </div>
              <div className="ml-3">
                <h1 className="text-2xl text-slate-900">Jumlah Ustadz</h1>
                <p>8</p>
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
