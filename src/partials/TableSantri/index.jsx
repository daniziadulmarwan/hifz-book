import React from "react";

function TableSantri() {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center border-t border-slate-200">
              <thead className="border-b bg-gray-100">
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
                    Nama Lengkap
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium uppercase text-gray-900 px-6 py-4"
                  >
                    Halaqoh
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium uppercase text-gray-900 px-6 py-4"
                  >
                    Asal
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
                    Fayha Zhafiratul Marwa
                  </td>
                  <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    5
                  </td>
                  <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Tasikmalaya
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

export default TableSantri;
