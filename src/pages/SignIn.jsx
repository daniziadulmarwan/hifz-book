import React, { useState } from "react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import ReCAPTCHA from "react-google-recaptcha";
import ImgLogin from "../assets/images/img-login.jpg";
import ImgAmin from "../assets/images/logo-santri.png";
import { useNavigate } from "react-router-dom";
import { axiosJwt } from "../config/api";

function SignIn() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axiosJwt.post("/auth/signin", { username, password }).then((response) => {
      localStorage.setItem("token", response.data.token);
      setLoading(false);
      navigate("/dashboard");
    });
  };

  return (
    <div className="w-screen h-screen flex overflow-x-hidden">
      <div className="w-full md:w-1/2 h-screen">
        <div className="px-10 md:px-32 h-screen flex flex-col justify-center items-center">
          <img src={ImgAmin} alt="Amin Gambar" width={220} className="mb-4" />

          <form className="flex flex-col gap-4 w-full lg:w-8/12">
            <div>
              <input
                className="border border-slate-300 w-full py-3 px-2 rounded focus:outline-none focus:border-slate-500 focus:border"
                id="username"
                type="text"
                placeholder="Username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                className="border border-slate-300 w-full py-3 px-2 rounded focus:outline-none focus:border-slate-500 focus:border"
                id="password"
                type={`${show ? "text" : "password"}`}
                placeholder="Password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  <HiOutlineEyeSlash size={20} />
                ) : (
                  <HiOutlineEye size={20} />
                )}
              </div>
            </div>

            <div>
              <ReCAPTCHA
                sitekey="6LeFod4jAAAAAKeo9fwXl1Sv5Xct65DIIYpvhsqS"
                onChange={(value) => setCaptcha(value)}
              />
            </div>

            {loading ? (
              <button
                disabled
                className="bg-sky-500 py-2 grid place-items-center uppercase rounded text-white font-semibold"
                type="submit"
              >
                Loading...
              </button>
            ) : (
              <button
                disabled={
                  username !== "" && password.length >= 6 && captcha !== null
                    ? false
                    : true
                }
                className={`bg-sky-500 hover:bg-sky-400 py-2 grid place-items-center uppercase rounded text-white font-semibold disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-gray-200 disabled:font-semibold`}
                type="submit"
                onClick={onSubmit}
              >
                Login
              </button>
            )}
          </form>

          <div className="mt-8">
            <p className="text-left">
              Perlu bantuan?{" "}
              <span className="text-[#2C94FD] font-semibold cursor-pointer">
                Hubungi Zeiteim Digital Care
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* START: Right */}
      <div className="w-0 md:w-1/2 h-screen">
        <img
          src={ImgLogin}
          alt="Gambar Login"
          className="bg-login w-full p-1"
        />
      </div>
    </div>
  );
}

export default SignIn;
