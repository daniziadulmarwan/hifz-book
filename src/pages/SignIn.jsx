import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config/api";

export default function SignIn() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    axios
      .post(`${BASE_URL}/auth/signin`, { username, password })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      });
  };

  return (
    <div className="h-screen w-full flex overflow-y-hidden">
      <div className="w-full px-5 lg:px-0 lg:w-1/2 h-full flex justify-center items-center">
        <div className="w-96">
          <form>
            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <input
                autoComplete="off"
                id="username"
                type="text"
                className="w-full border border-slate-300 py-2 px-4 rounded focus:border-slate-300 active:border-slate-300 focus:outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password">Password</label>
              <input
                autoComplete="off"
                id="password"
                type="password"
                className="w-full border border-slate-300 py-2 px-4 rounded focus:border-slate-300 active:border-slate-300 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <button
                onClick={onSubmit}
                type="button"
                className="w-full py-2 px-4 rounded uppercase bg-sky-500 text-white hover:bg-sky-400"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 bg-yellow-200 h-full"></div>
    </div>
  );
}
