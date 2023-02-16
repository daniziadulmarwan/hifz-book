import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Hfiz from "../pages/Hfiz";
import Santri from "../pages/Santri";
import Setting from "../pages/Setting";
import SignIn from "../pages/SignIn";

const AuthCheck = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" />;
};

const GuestCheck = ({ children }) => {
  const token = localStorage.getItem("token");
  return !token ? children : <Navigate to="/dashboard" />;
};

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <GuestCheck>
              <SignIn />
            </GuestCheck>
          }
        />

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
        <Route
          path="/santri/hfiz/:id"
          element={
            <AuthCheck>
              <Hfiz />
            </AuthCheck>
          }
        />
        <Route
          path="/setting"
          element={
            <AuthCheck>
              <Setting />
            </AuthCheck>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
