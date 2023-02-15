import axios from "axios";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { BASE_URL } from "../config/api";
import Dashboard from "../pages/Dashboard";
import Hfiz from "../pages/Hfiz";
import Santri from "../pages/Santri";
import Setting from "../pages/Setting";
import SignIn from "../pages/SignIn";

const AuthCheck = ({ children }) => {
  const token = localStorage.getItem("token");

  // const refreshToken = async () => {
  //   try {
  //     const res = await axios.get(`${BASE_URL}/auth/refresh-token`);
  //     localStorage.removeItem("token");
  //     localStorage.setItem("token", res.data.refreshToken);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // axios.interceptors.request.use(async (config) => {
  //   const currentDate = new Date();
  //   if (token.exp * 1000 < currentDate.getTime()) {
  //     refreshToken();
  //   }
  // });

  return token ? children : <Navigate to="/" />;
};

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/dashboard"
          element={
            <AuthCheck>
              <Dashboard />
            </AuthCheck>
          }
        />

        <Route
          path="/santri"
          element={
            <AuthCheck>
              <Santri />
            </AuthCheck>
          }
        />
        <Route path="/santri/hfiz/:id" element={<Hfiz />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
