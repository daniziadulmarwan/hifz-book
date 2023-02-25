import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiOutlineXMark } from "react-icons/hi2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { axiosJwt } from "../../config/api";
import { toast } from "react-toastify";

function ModalAddSabqi({ santri_id, openModalAddSabqi, setOpenModalAddSabqi }) {
  const [juz, setJuz] = useState([]);
  const [pageJuz, setPageJuz] = useState([]);
  const [surah, setSurah] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  const [pageBook, setPageBook] = useState(0);
  const [sendSurah, setSendSurah] = useState("");
  const [sendJuz, setSendJuz] = useState("");
  const [sendPageJuz, setSendPageJuz] = useState("");

  const clearForm = () => {
    setStartDate(new Date());
    setPageBook("");
    setSendSurah("");
    setSendJuz("");
    setSendPageJuz("");
  };

  const getSurahAPI = () => {
    axiosJwt.get(`/sabaq/getAllSabaqBySantriId/${santri_id}`).then((res) => {
      let newSurah = res.data.data.map((data) => {
        return data.surah;
      });
      setSurah(Array.from(new Set(newSurah)));
    });
  };

  const getJuzAPI = () => {
    axiosJwt.get(`/sabaq/getAllSabaqBySantriId/${santri_id}`).then((res) => {
      let newJuz = res.data.data.map((data) => {
        return data.juz;
      });
      setJuz(Array.from(new Set(newJuz)));
    });
  };

  const fillPageJuzWithNumber = () => {
    let items = [];
    for (let i = 1; i <= 20; i++) {
      items.push(i);
    }
    setPageJuz(items);
  };

  useEffect(() => {
    getSurahAPI();
    getJuzAPI();
    fillPageJuzWithNumber();
  }, []);

  const onSubmit = () => {
    axiosJwt
      .post(`/sabqi/createSabqi`, {
        date: startDate,
        surah: sendSurah,
        juz: sendJuz,
        page_juz: pageBook,
        page_quran: sendPageJuz,
        santri_id: santri_id,
      })
      .then((res) => {
        toast.success(res.data.msg, { autoClose: 1000 });
        setOpenModalAddSabqi(false);
        clearForm();
      })
      .catch((err) => {
        toast.success(err.message, { autoClose: 1000 });
        clearForm();
      });
  };

  return (
    <>
      <Transition appear show={openModalAddSabqi} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpenModalAddSabqi(false)}
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
                      onClick={() => setOpenModalAddSabqi(false)}
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
                      <label htmlFor="role" className="uppercase text-sm">
                        Surah
                      </label>
                      <select
                        name="role"
                        id="role"
                        className="form-control"
                        value={sendSurah}
                        onChange={(e) => setSendSurah(e.target.value)}
                      >
                        <option hidden>Pilih</option>
                        {surah.map((item, index) => (
                          <option key={index + 1} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
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

                    <div className="mb-3">
                      <label htmlFor="page_juz" className="uppercase text-sm">
                        Halaman Juz
                      </label>
                      <select
                        name="page_juz"
                        id="page_juz"
                        className="form-control"
                        value={pageBook}
                        onChange={(e) => setPageBook(e.target.value)}
                      >
                        <option hidden>Pilih</option>
                        {pageJuz.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="asal" className="uppercase text-sm">
                        Halaman Qur'an
                      </label>
                      <input
                        type="number"
                        autoComplete="off"
                        className="form-control"
                        id="asal"
                        value={sendPageJuz}
                        onChange={(e) => setSendPageJuz(e.target.value)}
                      />
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

export default ModalAddSabqi;
