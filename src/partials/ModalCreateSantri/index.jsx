import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiOutlineXMark } from "react-icons/hi2";
import { axiosJwt } from "../../config/api";
import { toast } from "react-toastify";
import { mutate } from "swr";

function ModalCreateSantri({ openCreateModal, setOpenCreateModal }) {
  const [name, setName] = useState("");
  const [halaqoh, setHalaqoh] = useState("");
  const [asal, setAsal] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axiosJwt
      .post("/santri/createSantri", { name, halaqoh, asal })
      .then((res) => {
        toast.success(res.data.msg, { autoClose: 1000 });
        setName("");
        setHalaqoh("");
        setAsal("");
        setLoading(false);
        setOpenCreateModal(false);
        setTimeout(() => {
          mutate("allSantri");
        }, 1000);
      })
      .catch((err) => {
        toast(err.message);
        setLoading(false);
        setOpenCreateModal(false);
      });
  };

  return (
    <>
      <Transition appear show={openCreateModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpenCreateModal(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between items-center">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 uppercase"
                    >
                      Tambah Data Santri
                    </Dialog.Title>
                    <button
                      onClick={() => setOpenCreateModal(false)}
                      className="border border-slate-300 rounded p-1"
                    >
                      <HiOutlineXMark size={18} />
                    </button>
                  </div>
                  <div className="mt-4 roboto-font">
                    <div className="mb-3">
                      <label htmlFor="fullname" className="uppercase text-sm">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullname"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="off"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="role" className="uppercase text-sm">
                        Halaqoh
                      </label>
                      <select
                        name="role"
                        id="role"
                        className="form-control"
                        value={halaqoh}
                        onChange={(e) => setHalaqoh(e.target.value)}
                      >
                        <option hidden>Pilih</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="asal" className="uppercase text-sm">
                        Asal
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="asal"
                        value={asal}
                        onChange={(e) => setAsal(e.target.value)}
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    {loading ? (
                      <button
                        disabled
                        type="button"
                        className="inline-block w-full justify-center rounded-md border border-transparent bg-sky-400 px-4 py-3 text-sm font-medium text-white focus:outline-none uppercase"
                      >
                        Loading...
                      </button>
                    ) : (
                      <button
                        onClick={onSubmit}
                        type="button"
                        className="inline-block w-full justify-center rounded-md border border-transparent bg-sky-400 px-4 py-3 text-sm font-medium text-white hover:bg-sky-500 focus:outline-none uppercase"
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ModalCreateSantri;
