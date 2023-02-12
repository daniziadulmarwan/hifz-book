import React from "react";
import { HiOutlineCheck, HiOutlineXMark } from "react-icons/hi2";

function TableSabaq() {
  return (
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
  );
}

export default TableSabaq;
