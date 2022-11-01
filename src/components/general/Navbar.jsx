import React, { useState } from "react";

export default function Navbar() {
  const [profileMenu, setProfileMenu] = useState(false);

  return (
    <div className=" fixed w-full bg-gray-100 shadow">
      <div className="max-w-7xl h-12 py-8 flex justify-between items-center mx-auto ">
        <div>
          <h3>Quora</h3>
        </div>
        <div className="max-w-md w-full">
          <input
            type="text"
            className="w-full px-6 rounded-md py-2 focus:outline-none"
          />
        </div>
        <div className="max-w-4xl relative">
          <div
            className="rounded-full h-10 w-10 bg-red-300 cursor-pointer"
            onClick={() => setProfileMenu(!profileMenu)}
          ></div>
          {profileMenu && (
            <div className="w-56 bg-white shadow-lg absolute right-0 top-12 p-4 rounded-lg">
              jajasdf
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
