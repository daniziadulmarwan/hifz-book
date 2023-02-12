import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

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
          <h4 className="">Home Page</h4>
          <div style={{ height: 2000 }}></div>''
          {/* END: Main Content */}
        </main>
      </div>
    </div>
  );
}
