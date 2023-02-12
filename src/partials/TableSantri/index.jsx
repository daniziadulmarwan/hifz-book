import React from "react";
import { HiPencil, HiTrash, HiArrowRightCircle } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

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
                    className="text-sm font-medium uppercase text-left text-gray-900 px-6 py-4"
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
                  <td className="text-base text-left text-gray-900 font-light px-6 py-4 whitespace-nowrap uppercase">
                    Fayha Zhafiratul Marwa
                  </td>
                  <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <span className="w-8 h-8 rounded-full grid place-items-center bg-yellow-200 text-yellow-500 font-semibold">
                      5
                    </span>
                  </td>
                  <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Tasikmalaya
                  </td>
                  <td className="text-base flex gap-2 text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <button className="bg-sky-200 rounded w-10 h-10 grid place-items-center text-white text-sm uppercase font-medium">
                      <HiPencil size={20} className="text-sky-500" />
                    </button>
                    <button className="bg-red-200 rounded w-10 h-10 grid place-items-center text-white text-sm uppercase font-medium">
                      <HiTrash size={20} className="text-red-500" />
                    </button>
                    <NavLink
                      to="/santri/detail"
                      className="bg-green-200 rounded w-10 h-10 grid place-items-center text-white text-sm uppercase font-medium"
                    >
                      <HiArrowRightCircle
                        size={24}
                        className="text-green-500"
                      />
                    </NavLink>
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
