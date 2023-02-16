import React, { useEffect, useState } from "react";
import { HiPencil, HiTrash, HiArrowRightCircle } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { axiosJwt } from "../../config/api";
import "react-confirm-alert/src/react-confirm-alert.css";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-toastify";
import ModalEditSantri from "../ModalEditSantri";

function TableSantri() {
  const [datas, setDatas] = useState([]);
  const [id, setId] = useState("");

  const [openModalEditSantri, setOpenModalEditSantri] = useState(false);

  const fetchAllData = () => {
    axiosJwt.get("/santri/getAllSantri").then((res) => {
      setDatas(res.data.data);
    });
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const onDelete = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to delete this data?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axiosJwt.delete(`/santri/deleteSantri/${id}`).then((res) => {
              toast.success(res.data.msg, { autoClose: 2000 });
              setTimeout(() => {
                window.location.reload();
              }, 2000);
            });
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const onOpenEditModal = (id) => {
    setId(id);
    setOpenModalEditSantri(true);
  };

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
                {datas.map((data, index) => (
                  <tr className="bg-white border-b" key={data._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="text-base text-left text-gray-900 font-light px-6 py-4 whitespace-nowrap uppercase">
                      {data.name}
                    </td>
                    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <span className="w-8 h-8 rounded-full grid place-items-center bg-yellow-200 text-yellow-500 font-semibold">
                        {data.halaqoh}
                      </span>
                    </td>
                    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {data.asal}
                    </td>
                    <td className="text-base flex gap-2 text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => onOpenEditModal(data._id)}
                        className="bg-sky-200 rounded w-9 h-9 grid place-items-center text-white text-sm uppercase font-medium"
                      >
                        <HiPencil size={20} className="text-sky-500" />
                      </button>
                      <button
                        onClick={() => onDelete(data._id)}
                        className="bg-red-200 rounded w-9 h-9 grid place-items-center text-white text-sm uppercase font-medium"
                      >
                        <HiTrash size={20} className="text-red-500" />
                      </button>
                      <NavLink
                        to={`/santri/hfiz/${data._id}`}
                        className="bg-green-200 rounded w-9 h-9 grid place-items-center text-white text-sm uppercase font-medium"
                      >
                        <HiArrowRightCircle
                          size={24}
                          className="text-green-500"
                        />
                      </NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {openModalEditSantri && (
        <ModalEditSantri
          id={id}
          openModalEditSantri={openModalEditSantri}
          setOpenModalEditSantri={setOpenModalEditSantri}
        />
      )}
    </div>
  );
}

export default TableSantri;
