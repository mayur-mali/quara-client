import React, { useContext, useState } from "react";
import { LogOut } from "../../context/AuthAction";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const [profileMenu, setProfileMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const { dispatch, user } = useContext(AuthContext);

  return (
    <div className="fixed w-full bg-gray-100 shadow z-20">
      <div className="max-w-7xl h-12 py-8 px-4 flex gap-x-4 md:gap-x-0 justify-between items-center mx-auto relative">
        <div>
          <h3>Quora</h3>
        </div>
        <div className="max-w-md w-full">
          <input
            type="text"
            className="w-full px-6 rounded-md py-2 focus:outline-none"
          />
        </div>
        <div className="md:hidden block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setMobileMenu(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <div className="max-w-4xl hidden md:block relative">
          <div
            className="rounded-full h-10 w-10 bg-red-300 cursor-pointer"
            onClick={() => setProfileMenu(!profileMenu)}
          ></div>
          {profileMenu && (
            <div className="w-56 bg-white shadow-lg absolute right-0 top-12 p-4 rounded-lg">
              <h2>{user.user.username}</h2>
              <button onClick={() => dispatch(LogOut())}>sign out</button>
            </div>
          )}
        </div>
      </div>
      {mobileMenu && (
        <div className="md:hidden bg-white h-screen block absolute w-full right-0 top-0 ">
          <div className="h-20 px-8 border-b-2 flex justify-between items-center">
            <h1>Quara app</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={() => setMobileMenu(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="bg-white shadow-md">
            <ul>
              <li className="text-2xl py-4 text-center">home</li>
              <li className="text-2xl py-4 text-center">home</li>
              <li className="text-2xl py-4 text-center">home</li>
              <li className="text-2xl py-4 text-center">home</li>
            </ul>
          </div>
          <div className="bg-white flex items-center justify-end px-8 absolute bottom-0 border-t-2 h-20 w-full">
            <div className="relative ">
              <div
                className="rounded-full h-10 w-10 bg-red-300 cursor-pointer"
                onClick={() => setProfileMenu(!profileMenu)}
              ></div>
              {profileMenu && (
                <div className="w-56 bg-white shadow-lg absolute -top-20 right-0  p-4 rounded-lg">
                  <h2>{user.user.username}</h2>
                  <button onClick={() => dispatch(LogOut())}>sign out</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
