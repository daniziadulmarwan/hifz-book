import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiOutlineCheck, HiOutlinePlus, HiOutlineXMark } from "react-icons/hi2";
import { BASE_URL } from "../../config/api";
import ModalAddSabaq from "../ModalAddSabaq";

function TableSabaq() {
  const [openModalAddSabaq, setOpenModalAddSabaq] = useState(false);

  const getSabaqBySantriId = (id) => {
    axios.get(`${BASE_URL}/sabaq/getAllSabaqBySantriId/${id}`).then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    getSabaqBySantriId("63eb0d6113b462dc6cf0f765");
  }, []);

  return (
    <>
      {/* START: Button */}
      <div className="flex justify-between md:items-center gap-3">
        <div></div>
        <button
          onClick={() => setOpenModalAddSabaq(true)}
          className="bg-green-500 flex justify-center items-center rounded-sm text-sm uppercase text-white font-medium py-1 px-2 w-1/2 md:w-44"
        >
          <HiOutlinePlus size={24} className="mr-2" />
          Tambah Sabaq
        </button>
      </div>
      {/* END: Button */}

      {/* START: Tabs */}
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center border-t border-slate-200">
                <thead className="border-b bg-slate-100">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium uppercase text-gray-900 px-6 py-4"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium uppercase text-gray-900 px-6 py-4 text-left"
                    >
                      Hari
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium uppercase text-gray-900 px-6 py-4"
                    >
                      Tanggal
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium uppercase text-gray-900 px-6 py-4"
                    >
                      Surat
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium uppercase text-gray-900 px-6 py-4"
                    >
                      Juz
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium uppercase text-gray-900 px-6 py-4"
                    >
                      Halaman Juz
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium uppercase text-gray-900 px-6 py-4"
                    >
                      Halaman Qur'an
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium uppercase text-gray-900 px-6 py-4"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium uppercase text-gray-900 px-6 py-4"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      1
                    </td>
                    <td className="text-base text-left text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Senin
                    </td>
                    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      12/02/2023
                    </td>
                    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      An-Nur
                    </td>
                    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      23
                    </td>
                    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      15
                    </td>
                    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      234
                    </td>
                    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <span className="bg-green-200 py-1 px-2 rounded flex items-center">
                        <HiOutlineCheck
                          size={18}
                          className="mr-3 font-bold text-green-500"
                        />
                        Selesai
                      </span>
                    </td>
                    <td className="text-base text-grHiOutlineCheckay-900 font-light px-6 py-4 whitespace-nowrap">
                      <button className="bg-blue-500 rounded py-2 px-3 text-white text-sm uppercase font-medium">
                        Ubah Data
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* END: Tabs */}

      <ModalAddSabaq
        openModalAddSabaq={openModalAddSabaq}
        setOpenModalAddSabaq={setOpenModalAddSabaq}
      />
    </>
  );
}

export default TableSabaq;
