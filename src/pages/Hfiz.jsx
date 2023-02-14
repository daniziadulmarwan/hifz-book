import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { BASE_URL } from "../config/api";

function Hfiz() {
  const { id } = useParams();
  const [openSidebar, setOpenSidebar] = useState(false);
  const [name, setName] = useState("");

  const getSantriById = (id) => {
    axios.get(`${BASE_URL}/santri/getSantriById/${id}`).then((res) => {
      setName(res.data.data.name);
    });
  };

  useEffect(() => {
    getSantriById(id);
  }, [id]);

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
          <h4>
            Hfiz Page - <span className="uppercase">{name}</span>
          </h4>
          <div style={{ height: 2000 }}></div>''
          {/* END: Main Content */}
        </main>
      </div>
    </div>
  );
}

export default Hfiz;
