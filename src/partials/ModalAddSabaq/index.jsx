import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiOutlineXMark } from "react-icons/hi2";
import axios from "axios";

function ModalAddSabaq({ openModalAddSabaq, setOpenModalAddSabaq }) {
  const [surah, setSurah] = useState([]);

  const getSurahAPI = () => {
    axios.get("https://api.quran.gading.dev/surah").then((res) => {
      console.log(res.data.data);
      setSurah(res.data.data);
    });
  };

  useEffect(() => {
    getSurahAPI();
  }, []);

  return (
    <>
      <Transition appear show={openModalAddSabaq} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpenModalAddSabaq(false)}
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
                      Tambah Data Sabaq
                    </Dialog.Title>
                    <button
                      onClick={() => setOpenModalAddSabaq(false)}
                      className="border border-slate-300 rounded p-1"
                    >
                      <HiOutlineXMark size={18} />
                    </button>
                  </div>
                  <div className="mt-4">
                    <div className="mb-3">
                      <label htmlFor="fullname" className="uppercase text-sm">
                        Hari & Tanggal
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="fullname"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="role" className="uppercase text-sm">
                        Surah
                      </label>
                      <select name="role" id="role" className="form-control">
                        <option hidden>Pilih</option>
                        {surah.map((item) => (
                          <option value={item.name.short}>
                            {item.name.short}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="role" className="uppercase text-sm">
                        Juz
                      </label>
                      <select name="role" id="role" className="form-control">
                        <option hidden>Pilih</option>
                        <option value="1">1</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="asal" className="uppercase text-sm">
                        Asal
                      </label>
                      <input type="text" className="form-control" id="asal" />
                    </div>
                  </div>

                  <div className="mt-5">
                    <button
                      type="button"
                      className="inline-block w-full justify-center rounded-md border border-transparent bg-sky-400 px-4 py-3 text-sm font-medium text-white hover:bg-sky-500 focus:outline-none uppercase"
                    >
                      Submit
                    </button>
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

export default ModalAddSabaq;
