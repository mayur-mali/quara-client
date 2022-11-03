import React from "react";

export default function PostQuestion() {
  return (
    <div className="w-full rounded-md bg-white p-4 shadow-md">
      <div className="flex gap-x-4 h-26">
        <div className="h-10 flex-none w-10 bg-black rounded-full mt-2"></div>
        <textarea
          className="w-full p-2 focus:outline-none placeholder:text-2xl text-2xl"
          placeholder="What is your Question?"
        ></textarea>
      </div>
      <div className="flex mt-2 justify-between items-center">
        <div>
          <label
            htmlFor="add-image"
            className="bg-purple-400 flex gap-2 cursor-pointer w-40 rounded-full py-1 px-6 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.4}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            Add Image
          </label>
          <input type="file" name="" id="add-image" hidden />
        </div>
        <div>
          <button className="w-20 font-bold rounded-full px-2 py-1 bg-indigo-500 text-white">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
