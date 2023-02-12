import React from "react";

export default function SignIn() {
  return (
    <div className="h-screen w-full flex overflow-y-hidden">
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
        <div className="w-96">
          <form>
            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <input
                autoComplete="off"
                id="username"
                type="text"
                className="w-full border border-slate-300 py-2 px-4 rounded focus:border-slate-300 active:border-slate-300 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password">Password</label>
              <input
                autoComplete="off"
                id="password"
                type="password"
                className="w-full border border-slate-300 py-2 px-4 rounded focus:border-slate-300 active:border-slate-300 focus:outline-none"
              />
            </div>
            <div className="mb-3">
              <button
                type="button"
                className="w-full py-2 px-4 rounded uppercase bg-blue-600 text-white hover:bg-blue-500"
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
