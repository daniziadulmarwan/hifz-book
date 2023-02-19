import React from "react";
import {
  HiPencilSquare,
  HiCog6Tooth,
  HiUserGroup,
  HiLockClosed,
} from "react-icons/hi2";
import { NavLink, useHref, useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";

function Sidebar({ openSidebar }) {
  const route = useHref();
  const navigate = useNavigate();

  const onSignout = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure want logout",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            localStorage.removeItem("token");
            navigate("/");
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <>
      <div
        className={`${
          openSidebar ? "block" : "hidden"
        } lg:block w-28 bg-sky-500 h-screen`}
      >
        <div className="rotate-90">
          <h6 className="mt-16 text-white font-semibold text-2xl w-40 text-center">
            HFIZ BOOK
          </h6>
        </div>

        <ul className="mt-40 flex flex-col items-center justify-between h-96">
          <li className="grid place-items-center group">
            <NavLink
              to="/dashboard"
              className={`text-sm uppercase text-white flex flex-col items-center ${
                route === "/dashboard" ? "font-semibold" : ""
              }`}
            >
              <HiPencilSquare size={36} />
              Home
            </NavLink>
          </li>
          <li className="grid place-items-center">
            <NavLink
              to="/santri"
              className={`text-sm uppercase text-white flex flex-col items-center ${
                route === "/santri" ? "font-semibold" : ""
              }`}
            >
              <HiUserGroup size={36} />
              Santri
            </NavLink>
          </li>
          <li className="grid place-items-center">
            <NavLink
              to="/setting"
              className={`text-sm uppercase text-white flex flex-col items-center ${
                route === "/setting" ? "font-semibold" : ""
              }`}
            >
              <HiCog6Tooth size={36} />
              Setting
            </NavLink>
          </li>
          <li className="grid place-items-center">
            <button
              onClick={onSignout}
              className="text-sm uppercase flex text-white flex-col items-center"
            >
              <HiLockClosed size={36} className="text-white" />
              Signout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
