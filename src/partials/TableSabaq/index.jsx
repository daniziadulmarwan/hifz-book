import React, { useState } from "react";
import { HiOutlineCheck, HiOutlinePlus, HiOutlineXMark } from "react-icons/hi2";
import { axiosJwt } from "../../config/api";
import ModalAddSabaq from "../ModalAddSabaq";
import Spinner from "../../assets/images/spinner.gif";
import useSwr from "swr";

function TableSabaq({ santri_id }) {
  const [openModalAddSabaq, setOpenModalAddSabaq] = useState(false);

  const fetcher = async () => {
    const res = await axiosJwt.get(`/sabaq/getAllSabaqBySantriId/${santri_id}`);
    return res.data.data;
  };

  const { data, isLoading } = useSwr("sabaq", fetcher);
  if (isLoading) {
    return (
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center border-t border-slate-200 roboto-font">
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
                  <tr className="h-48 bg-white">
                    <td rowSpan={10} colSpan={9} className="text-center">
                      <img
                        src={Spinner}
                        alt="spinner"
                        className="inline-block"
                      />
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
  console.log(data);

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
                  {data?.map((item, index) => (
                    <tr className="bg-white border-b" key={item._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="text-base text-left text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.hari}
                      </td>
                      <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {new Date(item.tanggal).toLocaleDateString("id-ID")}
                      </td>
                      <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap kufi-font">
                        {item.surah}
                      </td>
                      <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.juz}
                      </td>
                      <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.page_juz}
                      </td>
                      <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.page_quran}
                      </td>
                      <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.page_juz === 20 ? (
                          <span className="bg-green-200 py-1 px-2 rounded flex items-center">
                            <HiOutlineCheck
                              size={18}
                              className="mr-3 font-bold text-green-500"
                            />
                            Selesai
                          </span>
                        ) : (
                          <span className="bg-red-200 py-1 px-2 rounded flex items-center">
                            <HiOutlineXMark
                              size={18}
                              className="mr-3 font-bold text-red-500"
                            />
                            Belum Selesai
                          </span>
                        )}
                      </td>
                      <td className="text-base text-grHiOutlineCheckay-900 font-light px-6 py-4 whitespace-nowrap">
                        <button className="bg-blue-500 rounded py-2 px-3 text-white text-sm uppercase font-medium">
                          Ubah Data
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* END: Tabs */}

      <ModalAddSabaq
        santri_id={santri_id}
        openModalAddSabaq={openModalAddSabaq}
        setOpenModalAddSabaq={setOpenModalAddSabaq}
      />
    </>
  );
}

export default TableSabaq;
