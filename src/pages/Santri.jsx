import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { HiOutlinePlus } from "react-icons/hi2";
import TableSantri from "../partials/TableSantri";
import ModalCreateSantri from "../partials/ModalCreateSantri";

export default function Santri() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);

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
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-4">
              <h4 className="text-3xl font-semibold mb-4 md:mb-0">
                Daftar Siswa
              </h4>
              <div className="flex md:items-center gap-3">
                <button
                  onClick={() => setOpenCreateModal(!openCreateModal)}
                  className="bg-green-500 flex justify-center items-center rounded-sm text-sm uppercase text-white font-medium py-1 px-2 w-1/2 md:w-44"
                >
                  <HiOutlinePlus size={24} className="mr-2" />
                  Tambah Data
                </button>
                {/* <button className="bg-rose-500 flex justify-center items-center rounded-sm text-sm uppercase text-white font-medium py-1 px-2 w-1/2 md:w-44">
                  <HiOutlineDocumentText size={24} className="mr-2" />
                  Import Data
                </button>
                <button className="bg-sky-500 flex items-center justify-center rounded-sm text-sm uppercase text-white font-medium py-1 px-2 w-1/2 md:w-48">
                  <HiOutlineCloudArrowDown size={24} className="mr-2" />
                  Export Data
                </button> */}
              </div>
            </div>
          </div>
          <TableSantri />
          {/* END: Main Content */}
        </main>
      </div>
      <ModalCreateSantri
        openCreateModal={openCreateModal}
        setOpenCreateModal={setOpenCreateModal}
      />
    </div>
  );
}
