import React from "react";
import Router from "./router/Router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <Router />
      <ToastContainer theme="colored" />
    </>
  );
}
