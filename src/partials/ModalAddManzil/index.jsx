/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiOutlineXMark } from "react-icons/hi2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { axiosJwt } from "../../config/api";
import { toast } from "react-toastify";

function ModalAddManzil({
  santri_id,
  openModalAddManzil,
  setOpenModalAddManzil,
}) {
  const [juz, setJuz] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  const [sendJuz, setSendJuz] = useState("");

  const clearForm = () => {
    setStartDate(new Date());
    setSendJuz("");
  };

  const getJuzAPI = () => {
    axiosJwt.get(`/sabaq/getAllSabaqBySantriId/${santri_id}`).then((res) => {
      let newJuz = res.data.data.map((data) => {
        return data.juz;
      });
      setJuz(Array.from(new Set(newJuz)));
    });
  };

  useEffect(() => {
    getJuzAPI();
  }, []);

  const onSubmit = () => {
    axiosJwt
      .post(`/manzil/createManzil`, {
        date: startDate,
        juz: sendJuz,
        santri_id: santri_id,
      })
      .then((res) => {
        toast.success(res.data.msg, { autoClose: 1000 });
        setOpenModalAddManzil(false);
        clearForm();
      })
      .catch((err) => {
        toast.success(err.message, { autoClose: 1000 });
        clearForm();
      });
  };

  return (
    <>
      <Transition appear show={openModalAddManzil} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpenModalAddManzil(false)}
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
                      Tambah Data Manzil
                    </Dialog.Title>
                    <button
                      onClick={() => setOpenModalAddManzil(false)}
                      className="border border-slate-300 rounded p-1"
                    >
                      <HiOutlineXMark size={18} />
                    </button>
                  </div>
                  <div className="mt-4 roboto-font">
                    <div className="mb-3">
                      <label htmlFor="fullname" className="uppercase text-sm">
                        Hari & Tanggal
                      </label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="form-control"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="juz" className="uppercase text-sm">
                        Juz
                      </label>
                      <select
                        name="juz"
                        id="juz"
                        className="form-control"
                        value={sendJuz}
                        onChange={(e) => setSendJuz(e.target.value)}
                      >
                        <option hidden>Pilih</option>
                        {juz.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-5">
                    <button
                      onClick={onSubmit}
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

export default ModalAddManzil;
