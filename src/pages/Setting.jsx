import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Setting() {
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
          <div className="bg-white rounded-sm mt-3 w-full h-full px-5 py-10">
            <h6 className="text-lg uppercase">Change Password</h6>
            <form className="mt-5">
              <div className="mb-3">
                <label htmlFor="new-password" className="">
                  Enter New Password
                </label>
                <input type="text" className="form-control" id="new-password" />
              </div>
              <div className="mb-3">
                <label htmlFor="new-password" className="">
                  Enter Repeat New Password
                </label>
                <input type="text" className="form-control" id="new-password" />
              </div>

              <div className="mb-3">
                <button
                  type="button"
                  className="bg-sky-500 hover:bg-sky-400 py-2 grid place-items-center uppercase rounded text-white font-semibold w-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* END: Main Content */}
        </main>
      </div>
    </div>
  );
}
